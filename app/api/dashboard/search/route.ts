import { BlogSearchParams } from "@/app/dashboard/types";
import connectDB from "@/lib/mongodb";
import Blog from "@/models/blog.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    await connectDB();
    const body=await request.json() as BlogSearchParams;
    if (body) {
        const blog=await Blog.find({[body.fieldName]: body.fieldValue});
        if (blog) {
            return NextResponse.json({data:blog});
        }
        return NextResponse.json({data:null, error:'No data found'});
    }
    return NextResponse.json({data:null, error:'Search params cannot be null'});
}