import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
    // https://jsonplaceholder.typicode.com/posts
    const res=await fetch("https://dummyjson.com/posts",{
        method:"GET",
        headers:{
            'content-type':'application/json'
        }
    });
    const data=await res.json();
    if (data) {
        return NextResponse.json({data: data});
    }
    return NextResponse.json({error:'No data found'});
}