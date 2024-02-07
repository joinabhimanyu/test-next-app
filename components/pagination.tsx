'use client';

import { Pagination } from "flowbite-react";
import { useRef, useState } from "react";

export default function PaginationControl({initialPage, totalPages}:{initialPage:number, totalPages:number}) {
    // , onPageChangeProp: (currentPage:number)=>void
    // const onPageChangePropRef=useRef(onPageChangeProp);
    const [currentPage, setCurrentPage]=useState(initialPage);
    const onPageChange=(page:number)=>{
        setCurrentPage(page);
        // if (onPageChangePropRef && onPageChangePropRef.current) {
        //     onPageChangePropRef.current(page);
        // }
    };

    return (
        <div className="flex overflow-x-auto sm:justify-center">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange}/>
        </div>
    )
}