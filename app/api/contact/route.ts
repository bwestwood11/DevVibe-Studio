import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { sendEmail } from "@/lib/mail";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  const { firstName, lastName, email, company, message } = body;
  console.log(body);
  if (!firstName || !lastName || !email || !message || !company) {
    return new NextResponse(JSON.stringify({ error: "Missing fields" }));
  }

  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      company,
      message,
    },
  });

  const newContactHtml = `
    Hi Brett,\n
    You Have New Message from ${firstName} ${lastName} \n\n

    =========== Details =============\n
    Name: ${firstName} ${lastName}\n
    Email: ${email}\n
    Company: ${company}\n
    Message: ${message}\n
    `;

  const userHtml = `
    Hi ${firstName},\n\n

    Thank you for reaching out! We will get back to you soon.\n\n

    Best,\n

    DevVibe Studio\n
    `;
  await Promise.all([
    sendEmail(email, userHtml, "Thank you for reaching out!"),
    sendEmail(
      "dabrettwestwood@gmail.com",
      newContactHtml,
      "New contact form submitted"
    ),
  ]);

  return NextResponse.json("success");
}
