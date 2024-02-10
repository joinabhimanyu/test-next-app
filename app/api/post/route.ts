import connectDB from "@/lib/mongodb";
import Post from "@/models/post.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    await connectDB();
    const res=await Post.find({}).populate('comments').exec();
    if (res) {
        return NextResponse.json(res);
    }
}