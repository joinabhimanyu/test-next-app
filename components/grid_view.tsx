'use client';

import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import MainPageHolder from "./main_page";
import PaginationControl from "./pagination";

export enum GridViewClickableTemplate {
    TableRow = 'TableRow',
    TableCell = 'TableCell',
    Edit = 'Edit',
}
export interface GridViewColumnOptions {
    columnName?: string;
    columnDataName?: string;
    columnType?: string;
    clickable?: boolean;
}
export interface GridViewOptions {
    columns: GridViewColumnOptions[];
    idColumn?: string;
    wantEditing?: boolean;
    clickableTemplate?: GridViewClickableTemplate;
    maxHeight?: number;

    wantPaging?: boolean;
    total?: number;
    skip?: number;
    limit?: number;
    onPageChange?: (page: number) => void;

    onRowClick?: (row: any, showDetailPaneState?: boolean) => void;
}
export default function GridView({ records, options }: {
    records: any,
    options: GridViewOptions
}) {
    if (records && records.length && options && options.columns && options.columns.length) {
        return (
            <>
                {/* placeholder for table */}
                <div className={`min-h-fit overflow-x-auto max-h-${options.maxHeight || 600}`}>
                    <Table>
                        <Table.Head className="sticky">
                            {options.columns.map(column => {
                                return (
                                    <Table.HeadCell>{column.columnName}</Table.HeadCell>
                                )
                            })}
                            {options.wantEditing ? (
                                <Table.HeadCell>
                                    <span className="sr-only">Edit</span>
                                </Table.HeadCell>
                            ) : null}
                        </Table.Head>

                        <Table.Body className="divide-y">
                            {records.map((record: any) => {
                                return (
                                    <>
                                        {options.clickableTemplate === GridViewClickableTemplate.TableRow ? (
                                            <MainPageHolder.DetailPaneClickableContent
                                                key={record[options.idColumn || '']}
                                                onToggleDetailPaneProp={(value: boolean) => options.onRowClick && options.onRowClick(record, value)}>
                                                <></>
                                                <Table.Row key={record[options.idColumn || '']} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                    {options.columns.map(column => {
                                                        return (
                                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{record[column.columnDataName || '']}</Table.Cell>
                                                        )
                                                    })}

                                                    {options.wantEditing ? (
                                                        <Table.Cell>
                                                            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                                Edit
                                                            </a>
                                                        </Table.Cell>
                                                    ) : null}
                                                </Table.Row>
                                            </MainPageHolder.DetailPaneClickableContent>
                                        ) : (
                                            <Table.Row key={record[options.idColumn || '']} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                {options.columns.map(column => {
                                                    return (
                                                        <>
                                                            {options.clickableTemplate === GridViewClickableTemplate.TableCell && column.clickable ? (
                                                                <MainPageHolder.DetailPaneClickableContent
                                                                    onToggleDetailPaneProp={(value: boolean) => options.onRowClick && options.onRowClick(record, value)}>
                                                                    <></>
                                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{record[column.columnDataName || '']}</Table.Cell>
                                                                </MainPageHolder.DetailPaneClickableContent>
                                                            ) : (
                                                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{record[column.columnDataName || '']}</Table.Cell>
                                                            )}
                                                        </>
                                                    )
                                                })}

                                                {options.wantEditing ? (
                                                    <>
                                                        {options.clickableTemplate === GridViewClickableTemplate.Edit ? (
                                                            <MainPageHolder.DetailPaneClickableContent
                                                                onToggleDetailPaneProp={(value: boolean) => options.onRowClick && options.onRowClick(record, value)}>
                                                                <></>
                                                                <Table.Cell>
                                                                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                                        Edit
                                                                    </a>
                                                                </Table.Cell>
                                                            </MainPageHolder.DetailPaneClickableContent>
                                                        ) : (
                                                            <Table.Cell>
                                                                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                                                    onClick={() => {
                                                                        options.onRowClick && options.onRowClick(record);
                                                                    }}>
                                                                    Edit
                                                                </a>
                                                            </Table.Cell>
                                                        )}
                                                    </>

                                                ) : null}
                                            </Table.Row>
                                        )}
                                    </>
                                )
                            })}
                        </Table.Body>
                    </Table>
                </div>

                {/* placeholder for pagination */}
                {options.wantPaging ? (
                    <div className='relative min-w-full'>
                        {/* placeholder for pagination */}
                        <div className='flex flex-row items-end py-10 
                        justify-end right-0 top-40'>
                            <PaginationControl total={options.total || 0} skip={options.skip || 0} limit={options.limit || 0}
                                onPageChangeProp={async (page: number) => {
                                    options.onPageChange && options.onPageChange(page);
                                }} />
                        </div>
                    </div>
                ) : null}

            </>
        )
    }
    return <h3>No records found</h3>
}
