import { authOptions } from "@/lib/auth/authOptions";
import prisma from "@/prisma/db";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session)
    return NextResponse.json({ message: "Not authorized" }, { status: 401 });

  try {
    const incomeList = await prisma.income.findMany();
    // Return success message
    if (incomeList) {
      return NextResponse.json({ incomeList }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Failed to return income list" },
        { status: 404 }
      );
    }
  } catch (error) {}
  return NextResponse.json(
    { message: "Server error, try again later" },
    { status: 500 }
  );
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session)
    return NextResponse.json({ message: "Not authorized" }, { status: 401 });

  const user = await prisma.user.findUnique({
    where: {
      email: session.user?.email as string,
    },
  });

  if (!user)
    return NextResponse.json({ message: "User not found" }, { status: 404 });

  const req = await request.json();
  const {
    name,
    amount,
    date,
    category,
    frequency,
    transaction_type,
    description,
  } = req;

  try {
    // Create income
    const income = await prisma.income.create({
      data: {
        name: name,
        amount: parseInt(amount as string),
        category: category,
        date: date,
        frequency: frequency,
        transaction_type: transaction_type,
        description: description,
        userId: user.id,
      },
    });

    // Return success message
    if (income) {
      return NextResponse.json(
        { message: "Income registered successfully" },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: "Failed to register income" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Server error, try again later" },
      { status: 500 }
    );
  }
}
