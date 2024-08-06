import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { sendEmail } from "@/lib/mail";
import { WelcomeEmail } from "@/emails/welcome-email";
import NewUserEmail from "@/emails/new-contact-created-email";

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

  const html = WelcomeEmail({
    userFirstName: firstName,
    userLastName: lastName,
  });
  const newContactHtml = NewUserEmail({
    userFirstName: firstName,
    userLastName: lastName,
    userEmail: email,
    userCompany: company,
    userMessage: message,
  });
  await Promise.all([
    sendEmail(email, html, "Thank you for reaching out!"),
    sendEmail(
      "dabrettwestwood@gmail.com",
      newContactHtml,
      "New contact form submitted"
    ),
  ]);

  return NextResponse.json("success");
}
