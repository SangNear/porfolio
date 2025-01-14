import Message from "@/lib/model/message";
import { connectDB } from "@/lib/mongoDB";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json(); // Parse JSON body
    console.log("Received data:", data.name);
    await connectDB();
    const { name, email, message } = data;
    if (!name || !email || !message) {
      return new NextResponse("not enough data to create a product", {
        status: 400,
      });
    }
    const newMessage = await Message.create({
      name,
      email,
      message,
    });

    await newMessage.save();
    return NextResponse.json(
      { message: "Data received successfully", data: data, success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { message: "Failed to process the request", success: false },
      { status: 500 }
    );
  }
};
