'use client';

import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import PaginationControl from "@/components/pagination";
import { useEffect, useState } from "react";
import { IoClose } from 'react-icons/io5';
import MainPageHolder from "@/components/main_page";
import GridView, { GridViewClickableTemplate, GridViewOptions } from "@/components/grid_view";

export default function PageContent({ posts, total, skip, limit }: {
    posts: any,
    total: number,
    skip: number,
    limit: number
}) {

    const config: GridViewOptions = {
        columns: [{
            columnDataName: 'userId',
            columnName: 'User Id',
            clickable: false
        }, {
            columnDataName: 'id',
            columnName: 'Id',
            clickable: false
        }, {
            columnDataName: 'title',
            columnName: 'Title',
            clickable: false
        }, {
            columnDataName: 'body',
            columnName: 'Body',
            clickable: false
        }],
        idColumn: 'id',
        wantEditing: true,
        clickableTemplate: GridViewClickableTemplate.TableRow,
        onRowClick: (record: any, value?: boolean) => {
            console.log(record);
        },
        wantPaging: true,
        total,
        skip,
        limit,
        onPageChange: async (page: number) => {
            console.log('current page: ', page);
        }
    }

    return (
        <MainPageHolder>
            {/* main page panel */}
            <MainPageHolder.MainPage>
                <GridView
                    records={posts}
                    options={config}
                />
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
                    <GridView records={posts} options={config} />
                </MainPageHolder.DetailPaneContent>

            </MainPageHolder.DetailPane>


        </MainPageHolder>
    )
}