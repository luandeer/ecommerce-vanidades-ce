"use client"
import { titleFont } from "@/config/fonts";
import { useUIStore } from "@/store";
import Link from "next/link";
import {IoSearchOutline, IoCartOutline} from 'react-icons/io5'


export const TopMenu = () => {
    const openSideMenu = useUIStore(state => state.openSideMenu);

    return (
        <nav className="flex px-0 sm:px-5 justify-between items-center w-full">
            <div>
                <Link href="/">
                    <span className={`${titleFont.className} antialiased font-bold`}>
                        
                        Teslo
                    </span>
                    <span> | shop</span>
                </Link>
            </div>

            <div className="hidden sm:block">
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/men">
                    hombres
                </Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/women">
                    woman
                </Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/kid">
                    kids
                </Link>
            </div>
            <div className="flex items-center">
                <Link href="/search" className="mx-2">
                    <IoSearchOutline size={20}/>
                </Link>
                <Link href="/cart" className="mx-2">
                    <div className="relative">
                    <span className="absolute px-1 rounded-full -right-2 text-xs font-bold -top-2 bg-blue-700 text-white">3</span>
                    <IoCartOutline size={20}/>
                    </div>
                </Link>
                <button 
                onClick={openSideMenu}
                className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
                Menú
            </button>
            </div>
            
        </nav>
    );
};
