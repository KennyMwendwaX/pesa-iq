import { authOptions } from "@/lib/auth/authOptions";
import prisma from "@/prisma/db";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session)
    return NextResponse.json({ message: "Not authorized" }, { status: 401 });

  try {
    const goalList = await prisma.goal.findMany();
    // Return success message
    if (goalList) {
      return NextResponse.json({ goalList }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Failed to return goal list" },
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
  const { name, amount, target_date, type, description } = req;

  try {
    // Create goal
    const goal = await prisma.goal.create({
      data: {
        name: name,
        amount: parseInt(amount as string),
        target_date: target_date,
        type: type,
        description: description,
        userId: user.id,
      },
    });

    // Return success message
    if (goal) {
      return NextResponse.json(
        { message: "Goal registered successfully" },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: "Failed to register goal" },
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
