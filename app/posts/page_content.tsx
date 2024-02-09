'use client';

import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import PaginationControl from "@/components/pagination";
import { useEffect, useState } from "react";
import { IoClose } from 'react-icons/io5';
import MainPageHolder from "@/components/main_page";

export default function PageContent({ posts, total, skip, limit }: {
    posts: any,
    total: number,
    skip: number,
    limit: number
}) {

    return (
        <MainPageHolder>
            {/* main page panel */}
            <MainPageHolder.MainPage>
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
                                    <MainPageHolder.DetailPaneClickableContent
                                        key={item.id}
                                        onToggleDetailPaneProp={(value: boolean) => console.log('detail pane value', value)}>
                                        {/* onClick={() => showDetailPaneAnimation()} */}
                                        <TableRow key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                        >
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
                                        <></>
                                    </MainPageHolder.DetailPaneClickableContent>
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>
                {/* placeholder for pagination */}
                <div className='relative min-w-full'>
                    {/* placeholder for pagination */}
                    <div className='flex flex-row items-end py-10 
                        justify-end right-0 top-40'>
                        {/*  */}
                        <PaginationControl total={total} skip={skip} limit={limit}
                            onPageChangeProp={async (page: number) => {
                                console.log('current page: ', page);
                                // posts = await getPosts(20);
                            }} />
                    </div>
                </div>
            </MainPageHolder.MainPage>


            {/* detail pane content */}
            <MainPageHolder.DetailPane>

                {/* placeholder for header */}
                <MainPageHolder.DetailPaneHeader wantCloseButton={true} onToogleDetailPaneProp={(value: boolean) => console.log('detail pane value', value)}>
                    <h3 className="p-5 font-semibold text-gray-600">Detail Pane Header</h3>
                    {/* <button className="mb-3" onClick={() => {
                        retreatDetailPaneAnimation();
                    }}><IoClose className="fixed right-5" /></button> */}
                </MainPageHolder.DetailPaneHeader>

                {/* placeholder for table */}
                <MainPageHolder.DetailPaneContent>
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
                                        >
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
                    {/* placdeholder for pagination */}
                    <div className='relative min-w-full'>
                        {/* placeholder for pagination */}
                        <div className='flex flex-row items-end py-10 
                        justify-end right-0 top-40'>
                            {/* onPageChangeProp={async(page:number)=>{
                                console.log('current page: ', page);
                                posts = await getPosts(20);
                            }} */}
                            {/* <PaginationControl initialPage={1} totalPages={50} /> */}
                        </div>
                    </div>
                </MainPageHolder.DetailPaneContent>

            </MainPageHolder.DetailPane>


        </MainPageHolder>
    )
}