import "server-only"
import { resend } from "./resend.";

export async function sendEmail(email: string, html: JSX.Element, subject: string) {
    await resend.emails.send({
       from: "DevVibe Studio <brett@devvibestudio.com>",
       to: email,
       subject: subject,
       react: html
    });
}