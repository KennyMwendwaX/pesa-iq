import prisma from "@/prisma/db";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    // Delete goal
    const deletedGoal = await prisma.goal.delete({
      where: {
        id: id,
      },
    });

    // Return success message
    if (deletedGoal) {
      return NextResponse.json(
        { message: "Goal deleted successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Failed to delete goal" },
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
