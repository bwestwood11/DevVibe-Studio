import "server-only"
import { resend } from "./resend.";

export async function sendEmail(email: string, html: string, subject: string) {
    await resend.emails.send({
       from: "DevVibe Studio <brett@devvibestudio.com>",
       to: email,
       subject: subject,
       html: html
    });
}