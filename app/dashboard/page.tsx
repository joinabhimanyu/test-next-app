import { getData } from '@/app/dashboard/action';
import Image from 'next/image';
import { BlogModel } from './types';
import Link from 'next/link';

export default async function Dashboard({
    params
}: {
    params: any
}) {
    const list: BlogModel[] = await getData();
    const totalPages = 10;
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className='min-h-fit'>
                <table className='text-start'>
                    <thead className='p-5 font-medium text-start'>
                        <tr>
                            <td>Title</td>
                            <td>Author</td>
                            <td>Body</td>
                            <td>Created At</td>
                            <td>Updated At</td>
                        </tr>
                    </thead>
                    <tbody className='p-5 font-medium text-start'>
                        {list.map((item: BlogModel) => {
                            return (
                                <tr key={item._id} className='box-border shadow-md hover:shadow-lg'>
                                    <td className='p-5'>
                                        {/* <Image
                                        src={item.avatar}
                                        alt="Vercel Logo"
                                        className="dark:invert"
                                        width={24}
                                        height={24}
                                        priority
                                    /> */}
                                        <Link href={`/dashboard/${item._id}`}>
                                            {item.title}
                                        </Link>
                                    </td>
                                    <td className='px-5'>
                                        {item.author}
                                    </td>
                                    <td className='px-5'>{item.body}</td>
                                    <td className='px-5'>{item.createdAt}</td>
                                    <td className='px-5'>{item.updatedAt}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className='relative min-w-full'>
                    <div className='flex flex-row items-end py-10 
                        justify-end right-0 top-40'>
                        {[...Array(totalPages).keys()].map((item) => {
                            return (
                                <div className='p-2 
                                    border-s-gray-50 border-r-2 shadow-md px-3 mx-0.5
                                    shadow-gray
                                    cursor-pointer rounded-md'>
                                    {item + 1}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}