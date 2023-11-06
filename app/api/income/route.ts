import { NextResponse } from "next/server";

export async function GET() {}
export async function POST(request: Request) {
    const req = await request.json();
    const { name, email, password } = req;

    try {
    
        // Create income
        const user = await 
    
        // Return success message
        if (user) {
          return NextResponse.json(
            { message: "User registered successfully" },
            { status: 201 }
          );
        } else {
          return NextResponse.json(
            { message: "Failed to register user" },
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
