import prisma from "@/prisma/db";
import { NextResponse } from "next/server";

export async function GET() {
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
      },
    });

    // Return success message
    if (goal) {
      return NextResponse.json(
        { message: "Income registered successfully" },
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
