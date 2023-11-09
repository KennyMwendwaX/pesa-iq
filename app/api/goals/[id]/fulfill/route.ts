import prisma from "@/prisma/db";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    // Create goal
    const fulfilledGoal = await prisma.goal.update({
      where: {
        id: id,
      },
      data: {
        status: "fulfilled",
      },
    });

    // Return success message
    if (fulfilledGoal) {
      return NextResponse.json(
        { message: "GGoal fulfilled successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Failed to fulfill goal" },
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
