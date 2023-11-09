import prisma from "@/prisma/db";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  try {
    // Delete income
    const deletedIncome = await prisma.income.delete({
      where: {
        id: id,
      },
    });

    // Return success message
    if (deletedIncome) {
      return NextResponse.json(
        { message: "Income deleted successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Failed to delete income" },
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
