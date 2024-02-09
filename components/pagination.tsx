'use client';

import { Pagination } from "flowbite-react";
import { useEffect, useRef, useState } from "react";

export default function PaginationControl({ total, skip, limit, onPageChangeProp }: {
    total: number, skip: number, limit: number, onPageChangeProp: (currentPage: number) => void
}) {
    // 
    const onPageChangePropRef = useRef(onPageChangeProp);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    useEffect(() => {
        setTotalPages(Math.ceil(total / limit));
    }, [total, limit]);

    useEffect(() => {
        const remaining = total - skip;
        const remainingPages = Math.ceil(remaining / limit);
        setCurrentPage(totalPages - remainingPages);
    }, [totalPages, skip, total, limit]);


    const onPageChange = (page: number) => {
        // setCurrentPage(page);
        if (onPageChangePropRef && onPageChangePropRef.current) {
            onPageChangePropRef.current(page);
        }
    };

    return (
        <div className="flex overflow-x-auto sm:justify-center">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </div>
    )
}