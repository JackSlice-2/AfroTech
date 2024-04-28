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
        message,
        createdAt
    } = body;


    const user = await prisma.message.create({
        data: {
            email,
            name,
            phone,
            option,
            message,
            createdAt
        }
    });

    return NextResponse.json(user);
}