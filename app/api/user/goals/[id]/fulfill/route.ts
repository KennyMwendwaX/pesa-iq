import { authOptions } from "@/lib/auth/authOptions";
import prisma from "@/prisma/db";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session)
    return NextResponse.json({ message: "Not authorized" }, { status: 401 });
  const id = params.id;
  try {
    // Update goal status
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
        { message: "Goal fulfilled successfully" },
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
