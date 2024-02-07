'use client';

import { Pagination } from "flowbite-react";
import { useState } from "react";

export default function PaginationControl() {

    const [currentPage, setCurrentPage]=useState(1);
    const onPageChange=(page:number)=>setCurrentPage(page);

    return (
        <div className="flex overflow-x-auto sm:justify-center">
            <Pagination currentPage={currentPage} totalPages={50} onPageChange={onPageChange}/>
        </div>
    )
}