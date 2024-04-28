import prismadb from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET( request: Request) {
  console.log('Request method:', request.method);
  try {
     console.log('Attempting to fetch messages...');
     const messages = await prismadb.message.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        phone: true,
        option: true,
        message: true,
        createdAt: true,
      },
    });
         console.log('Messages fetched:', messages);
     return NextResponse.json(messages);
  } catch (error: any) {
     console.error('Error fetching messages:', error);
     return NextResponse.json({ error: 'Failed to fetch messages', details: error.message });
   }
 }
 