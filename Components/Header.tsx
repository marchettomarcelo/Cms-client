import Link from "next/link";
import React from "react";

export default function HeaderComponent(){
    return(
        <div className="hed">

            <span className="sp">
                <Link href="/">
                    <a className="font-semibold text-4xl">Main Page</a>
                </Link>
            </span>
        </div>
    )
}

