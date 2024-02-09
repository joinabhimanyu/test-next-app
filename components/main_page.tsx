'use client';

import React, { ReactElement, ReactNode, createContext, useContext, useEffect, useRef, useState } from "react"
import { IoClose } from "react-icons/io5"

const initialValue: any = {}
const MainPageDetailPaneContext = createContext(initialValue);
export default function MainPageHolder({ children }: {
    children: ReactNode
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
        <MainPageDetailPaneContext.Provider value={{
            showDetailPane,
            showDetailPaneAnimation,
            retreatDetailPaneAnimation,
            detailPaneWidth,
            detailPaneOpacity,
            marginLeft
        }}>
            <div className="flex flex-row relative">
                {children}
            </div>
        </MainPageDetailPaneContext.Provider>
    )
}

MainPageHolder.MainPage = function MainPageContent({ children }: {
    children: ReactNode
}) {
    return (
        <div className="flex flex-col items-center 
            justify-between px-10">
            {children}
        </div>
    )
}

MainPageHolder.DetailPane = function DetailPaneHolder({ children }: {
    children: ReactNode
}) {
    // usecontext to get the values from MainPageDetailPaneContext
    const {
        showDetailPane,
        showDetailPaneAnimation,
        retreatDetailPaneAnimation,
        detailPaneWidth,
        detailPaneOpacity,
        marginLeft
    } = useContext(MainPageDetailPaneContext);

    {/* detail pane content */ }
    return (
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
            {children}
        </div>
    )
}

MainPageHolder.DetailPaneHeader = function DetailPaneHeaderContent({ children, wantCloseButton, onToogleDetailPaneProp }: {
    children: ReactNode,
    wantCloseButton: boolean,
    onToogleDetailPaneProp: (args: boolean) => void
}) {
    const onToogleDetailPaneRef = useRef(onToogleDetailPaneProp);
    const { retreatDetailPaneAnimation, showDetailPane } = useContext(MainPageDetailPaneContext);
    return (
        <div className="flex flex-row min-w-full bg-gray-200">
            {children}
            {wantCloseButton ? (
                <button className="mb-3" onClick={() => {
                    retreatDetailPaneAnimation();
                    onToogleDetailPaneRef.current(!showDetailPane);
                }}><IoClose className="fixed right-5" /></button>
            ) : null}

        </div>
    )
}

MainPageHolder.DetailPaneContent = function DetailPaneContentComp({ children }: {
    children: ReactNode
}) {
    return (
        <>{children}</>
    )
}

MainPageHolder.DetailPaneClickableContent = function DetailPaneClickableContentCom({ children, onToggleDetailPaneProp }: {
    children: ReactElement[],
    onToggleDetailPaneProp: (args: boolean) => void
}) {
    const onToggleDetailPaneRef = useRef(onToggleDetailPaneProp);
    const { showDetailPaneAnimation, showDetailPane } = useContext(MainPageDetailPaneContext);
    return React.Children.map(children, (child: ReactElement) => {
        return React.cloneElement(child, {
            onClick: () => {
                onToggleDetailPaneRef.current(!showDetailPane);
                showDetailPaneAnimation();
            }
        })
    })
}
