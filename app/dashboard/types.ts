export type BlogModel={
    _id: string
    title: string
    author: string
    body: string
    comments:[{body:string}],
    hidden: string,
    meta:{
        votes: string,
        favs: string
    }
    createdAt: string
    updatedAt: string
}

export type BlogSearchParams={
    fieldName: string
    fieldValue: string
}

export type BlogPostModel={
    title: string
    author: string
    body: string
    comments:[{body:string}],
    hidden: string,
    meta:{
        votes: string,
        favs: string
    }
}