export async function getPosts() {
    const res=await fetch("http://localhost:3000/api/posts",{
        method:"GET",
        headers:{
            'content-type':'application/json'
        }
    });
    const {data}=await res.json();
    return data;
}