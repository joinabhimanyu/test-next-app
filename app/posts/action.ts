export async function getPosts(skip:number) {
    const res=await fetch(`http://localhost:3000/api/posts?limit=20&skip=${skip}`,{
        method:"GET",
        headers:{
            'content-type':'application/json'
        }
    });
    const {data}=await res.json();
    return data;
}