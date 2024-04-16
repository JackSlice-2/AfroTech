import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";

export async function POST(
    request: Request
) {
    const body = await request.json();
    const {
        email,
        name,
        phone,
        option,
        message
    } = body;


    const user = await prisma.message.create({
        data: {
            email,
            name,
            phone,
            option,
            message
        }
    });

    return NextResponse.json(user);
}