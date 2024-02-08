'use client';

import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import PaginationControl from "@/components/pagination";
import { useEffect, useState } from "react";
import { IoClose } from 'react-icons/io5';

export default function PageContent({ posts, total, skip, limit }: {
    posts: any,
    total: number,
    skip: number,
    limit: number
}) {

    const [showDetailPane, setshowDetailPane] = useState(false);
    const showDetailPaneAnimation = () => setshowDetailPane(true);
    const retreatDetailPaneAnimation = () => setshowDetailPane(false);
    const [detailPaneWidth, setdetailPaneWidth] = useState('w-0');
    const [detailPaneOpacity, setdetailPaneOpacity] = useState('0');
    const [marginLeft, setmarginLeft] = useState('md:ml-custom250');

    useEffect(() => {
        if (showDetailPane) {
            setmarginLeft('md:ml-custom120');
            setdetailPaneWidth('w-fit');
            setdetailPaneOpacity('1');

        } else {
            setmarginLeft('md:ml-custom250');
            setdetailPaneWidth('w-0');
            setdetailPaneOpacity('0')
        }
    }, [showDetailPane]);

    return (
        <div className="flex flex-row relative">
            {/* main page panel */}
            <div className="flex flex-col items-center 
            justify-between px-10">
                {/* placeholder for table */}
                <div className='min-h-fit overflow-x-auto max-h-600'>
                    <Table>
                        <TableHead className="sticky">
                            <TableHeadCell>User Id</TableHeadCell>
                            <TableHeadCell>Id</TableHeadCell>
                            <TableHeadCell>Title</TableHeadCell>
                            <TableHeadCell>Body</TableHeadCell>
                            <TableHeadCell>
                                <span className="sr-only">Edit</span>
                            </TableHeadCell>
                        </TableHead>
                        <TableBody className="divide-y">
                            {posts.map((item: any) => {
                                return (
                                    <TableRow key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                        onClick={() => showDetailPaneAnimation()}>
                                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {item.userId}
                                        </TableCell>
                                        <TableCell>{item.id}</TableCell>
                                        <TableCell>{item.title}</TableCell>
                                        <TableCell>{item.body}</TableCell>
                                        <TableCell>
                                            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                Edit
                                            </a>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>
                <div className='relative min-w-full'>
                    {/* placeholder for pagination */}
                    <div className='flex flex-row items-end py-10 
                        justify-end right-0 top-40'>
                        {/* onPageChangeProp={async(page:number)=>{
                                console.log('current page: ', page);
                                posts = await getPosts(20);
                            }} */}
                        <PaginationControl initialPage={1} totalPages={50} />
                    </div>
                </div>
            </div>
            {/* detail pane content */}
            <div className={`flex flex-col items-center 
            bg-white
            justify-between absolute 
            h-full 
            opacity-${detailPaneOpacity}
            ${marginLeft}
            transition-all ease-in delay-1000 rounded-md
            border-s-gray-300
            overflow-x-auto
            shadow-md
            ${detailPaneWidth}
            `}>

                {/* placeholder for header */}
                <div className="flex flex-row min-w-full bg-gray-200">
                    <h3 className="p-5 font-semibold text-gray-600">Detail Pane Header</h3>
                    <button className="mb-3" onClick={() => {
                            retreatDetailPaneAnimation();
                        }}><IoClose className="fixed right-5" /></button>
                </div>
                {/* placeholder for table */}
                <div className='min-h-fit overflow-x-auto max-h-600 w-full'>
                    <Table>
                        <TableHead className="sticky">
                            <TableHeadCell>User Id</TableHeadCell>
                            <TableHeadCell>Id</TableHeadCell>
                            <TableHeadCell>Title</TableHeadCell>
                            <TableHeadCell>Body</TableHeadCell>
                            <TableHeadCell>
                                <span className="sr-only">Edit</span>
                            </TableHeadCell>
                        </TableHead>
                        <TableBody className="divide-y">
                            {posts.map((item: any) => {
                                return (
                                    <TableRow key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                        onClick={() => showDetailPaneAnimation()}>
                                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {item.userId}
                                        </TableCell>
                                        <TableCell>{item.id}</TableCell>
                                        <TableCell>{item.title}</TableCell>
                                        <TableCell>{item.body}</TableCell>
                                        <TableCell>
                                            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                Edit
                                            </a>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>
                <div className='relative min-w-full'>
                    {/* placeholder for pagination */}
                    <div className='flex flex-row items-end py-10 
                        justify-end right-0 top-40'>
                        {/* onPageChangeProp={async(page:number)=>{
                                console.log('current page: ', page);
                                posts = await getPosts(20);
                            }} */}
                        <PaginationControl initialPage={1} totalPages={50} />
                    </div>
                </div>

            </div>
        </div>
    )
}