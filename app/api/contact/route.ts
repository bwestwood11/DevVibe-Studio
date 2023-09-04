import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const body = await request.json();
    const { firstName, lastName, email, company, phone, message } = body;

    if(!firstName || !lastName || !email || !message || !phone || !company) {
        return new NextResponse(JSON.stringify({ error: "Missing fields" }));
    }
   
    const user = await prisma.user.create({
        data: {
            firstName,
            lastName,
            email,
            company,
            phone,
            message
        }
    });

    return NextResponse.json("success")
}