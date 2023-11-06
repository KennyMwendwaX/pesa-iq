import prisma from "@/prisma/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const expenseList = await prisma.expense.findMany();
    // Return success message
    if (expenseList) {
      return NextResponse.json({ expenseList }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Failed to return expense list" },
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
    // Create expense
    const expense = await prisma.expense.create({
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
    if (expense) {
      return NextResponse.json(
        { message: "Income registered successfully" },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: "Failed to register expense" },
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
