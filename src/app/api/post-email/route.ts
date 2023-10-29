import nodemailer from "nodemailer";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const body = await req.json();
	const { name, email, message, subject } = body;

	const parsedMessage = `
<p>Name: ${name}</p> </br> 
<p>Email: ${email}</p> </br>
<p>${message}</p> </br>
 `;

	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: "danybilek@gmail.com",
			pass: process.env.EMAIL_PASSWORD,
		},
	});
	const mailOptions = {
		from: email,
		to: "danielbilek98@seznam.cz",
		subject: `danielbilek.com: ${subject}`,
		html: parsedMessage,
	};

	try {
		await transporter.sendMail(mailOptions);
		return NextResponse.json({}, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}
