'use server';

import { BlogModel } from "./types";

export async function getData():Promise<BlogModel[]> {
    const res=await fetch('http://localhost:3000/api/dashboard?page=1',{
        method:"GET",
        headers:{
            'Content-Type':'application/json'
        }
    });
    const {data}=await res.json();
    return data;
}