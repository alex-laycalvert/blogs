"use client";

import type { User } from "next-auth";
import { Fragment, useMemo, useState } from "react";
import Link from "next/link";
import * as Icons from "./icons";
import SlidingUnderline from "./SlidingUnderline";
import BlogSearch from "./BlogSearch";

type Props = {
    user: User | undefined;
};

export default function NavBar({ user }: Props) {
    const [navOpen, setNavOpen] = useState(false);
    const [iconRotate, setIconRotate] = useState<"rotate-0" | "rotate-180">(
        "rotate-0"
    );

    const links = useMemo(
        () => [
            {
                name: "My Account",
                href: "/account",
                disabled: !user,
            },
            {
                name: "Sign In",
                href: "/api/auth/signin",
                disabled: !!user,
            },
            { name: "Blogs", href: "/blogs" },
            { name: "Sign Out", href: "/api/auth/signout", disabled: !user },
        ],
        [user]
    );

    function handleOpenNav() {
        setNavOpen((prev) => !prev);
        setIconRotate((prev) =>
            prev === "rotate-0" ? "rotate-180" : "rotate-0"
        );
    }

    return (
        <nav className="">
            <div className="fixed left-0 top-0 flex h-20 w-full items-center justify-between border-b px-2 font-siteHeader">
                <Link className="font flex items-center space-x-1" href="/">
                    <span className="rounded-md bg-primary py-[0.1rem] pl-1 pr-[0.4rem] text-5xl font-semibold text-background">
                        <span>𝔅</span>
                    </span>
                    <span className="hidden font-siteHeader text-4xl font-light text-primary sm:flex">
                        LOGS
                    </span>
                </Link>
                <div className="flex items-center sm:hidden">
                    <button
                        className={`transition-all duration-200 hover:text-primary ${iconRotate}`}
                        onClick={handleOpenNav}
                    >
                        <Icons.Bars3 />
                    </button>
                </div>
                <div className="hidden sm:flex">
                    <BlogSearch collapsed />
                </div>
            </div>
            <div
                className={`fixed left-0 top-20 z-20 w-full space-y-8 overflow-hidden bg-background px-8 font-siteHeader text-2xl font-light text-gray-500 transition-[height,padding] duration-200 ${
                    navOpen ? "h-full py-20" : "h-0"
                }`}
            >
                <BlogSearch />
                <ul className="flex w-full flex-col items-center gap-8">
                    {links.map((l) =>
                        l.disabled ? (
                            <Fragment key={l.href} />
                        ) : (
                            <li key={l.href}>
                                <SlidingUnderline>
                                    <Link href={l.href}>
                                        {l.name.toUpperCase()}
                                    </Link>
                                </SlidingUnderline>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </nav>
    );
}
