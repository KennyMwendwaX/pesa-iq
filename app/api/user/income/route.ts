import prisma from "@/prisma/db";
import { NextResponse } from "next/server";

export async function GET() {
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
