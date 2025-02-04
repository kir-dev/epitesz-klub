import {NextRequest, NextResponse} from 'next/server'
import axios from "axios";

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
    const body = await request.json()

    const response = await axios.post(
        process.env.KIR_MAIL_URL ?? '',
        {
            from: {
                name: body.name || "Teszt Név",
                email: body.email || "teszt@example.com",
            },
            to: "liptak.peti.98@gmail.com",
            subject: "Weboldalról érkezett üzenet",
            html: body.message || "<h1>Ez egy teszt üzenet</h1>",
            replyTo: body.email,
            queue: "send",
        },
        {
            headers: {
                Authorization: `Api-Key ${process.env.KIR_MAIL_TOKEN}`, // Helyes formátum
                "Content-Type": "application/json",
            },
        }
    );
    return NextResponse.json(response.data);
}