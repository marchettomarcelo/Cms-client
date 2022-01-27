import Link from "next/link";
import React from "react";

export default function HeaderComponent(){
    return(
        <div className="sticky top-0 right-0 left-0  
            bg-slate-400 h-24">

            <span className="flex flex-row justify-evenly w-full items-center h-full">
                <Link href="/">
                    <a className="font-semibold text-4xl">Main Page</a>
                </Link>
            </span>
        </div>
    )
}

