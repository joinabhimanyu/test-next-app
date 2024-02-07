import { NextRequest, NextResponse } from "next/server";
import Blog from "@/models/blog.model";
import connectDB from "@/lib/mongodb";
import { BlogPostModel } from "@/app/dashboard/types";

export async function GET(request: NextRequest):Promise<NextResponse> {
    await connectDB();
    const allBlogs=await Blog.find({});
    
    if (allBlogs) {
        return NextResponse.json({data:allBlogs});    
    }
    return NextResponse.json({data:null, error:'No data found'});
}

export async function POST(request:NextRequest) {
    await connectDB();
    const body=await request.json() as BlogPostModel;
    if (body) {
        await Blog.create({...body});
    }
    return NextResponse.json({data:null, error: 'Request body cannot be empty'});
}
