import { BlogPostModel } from "@/app/dashboard/types";
import connectDB from "@/app/lib/mongodb";
import Blog from "@/app/models/blog.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest, context:{params:{id:string}}) {
    await connectDB();
    if (context.params.id!='') {
        const blog=await Blog.findById(context.params.id);
        if (blog) {
            return NextResponse.json({data:blog});
        }
        return NextResponse.json({data:null, error:'No data found'});
    }
    return NextResponse.json({data:null, error:'Id cannot be null or empty'});
}

export async function PUT(request:NextRequest, context:{params:{id:string}}) {
    await connectDB();
    const body=await request.json() as BlogPostModel;
    if (context.params.id && body) {
        await Blog.findByIdAndUpdate(context.params.id, {...body});
    }
    return NextResponse.json({data:null, error:"Id or request body cannot be null"});
}

export async function DELETE(request:NextRequest, context:{params:{id:string}}) {
    await connectDB();
    if (context.params.id) {
        await Blog.findByIdAndDelete(context.params.id);
    }
    return NextResponse.json({error:"Id cannot be null"});
}