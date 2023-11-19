import { authOptions } from "@/lib/auth/authOptions";
import prisma from "@/prisma/db";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session)
    return NextResponse.json({ message: "Not authorized" }, { status: 401 });

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
