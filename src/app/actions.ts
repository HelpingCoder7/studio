"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
    };
  }

  const { name, email, message } = validatedFields.data;

  // Configure Nodemailer
  // IMPORTANT: You must configure these environment variables in your .env file
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: (process.env.SMTP_PORT === "465"), // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`, // sender address
    to: process.env.MY_EMAIL, // list of receivers
    subject: `New message from your portfolio from ${name}`, // Subject line
    text: `You have received a new message from your portfolio contact form.\n\nHere are the details:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `
      <h2>New message from your portfolio</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.MY_EMAIL) {
        console.error("Email environment variables not set. Cannot send email.");
        // We will still return a success message to the user, but log the error on the server.
        // In a production app, you'd want more robust error handling/monitoring here.
         return { message: "Thank you for your message! I will get back to you soon." };
    }
      
    await transporter.sendMail(mailOptions);
    console.log("Message sent successfully!");
    
    return { message: "Thank you for your message! I will get back to you soon." };
  } catch (e) {
    console.error("Failed to send email", e);
    return { message: "An unexpected error occurred. Please try again." };
  }
}
