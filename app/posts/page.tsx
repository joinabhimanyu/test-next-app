import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { getPosts } from "./action";
import PaginationControl from "../../components/pagination";

export default async function Posts() {
    const posts = await getPosts();
    return (
        <div className="flex flex-col items-center justify-between px-10">
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
                        {posts.map((item:any) => {
                            return (
                                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
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
                            <PaginationControl/>
                        </div>
            </div>
        </div>
    )
}