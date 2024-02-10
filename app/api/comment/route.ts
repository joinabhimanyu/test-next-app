import connectDB from "@/lib/mongodb";
import Comment from "@/models/comment.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
    await connectDB();
    const res=await Comment.find({}).populate('post').exec();
    if (res) {
        return NextResponse.json({data:res});
    }
}