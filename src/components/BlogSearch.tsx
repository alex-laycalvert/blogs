"use client";

import { useSearchParams } from "next/navigation";
import { Search } from "@/components/icons";
import { useEffect, useState } from "react";

type Props = {
    collapsed?: boolean;
};

export default function BlogSearch({ collapsed }: Props) {
    const searchParams = useSearchParams();
    const [searchTerm, setSeachTerm] = useState("");

    useEffect(() => {
        if (!searchParams) {
            return;
        }
        setSeachTerm(searchParams.get("searchTerm") ?? "");
    }, [searchParams]);

    if (!collapsed) {
        return (
            <form className="relative flex items-center" action="/">
                <input
                    id="searchTerm"
                    name="searchTerm"
                    type="text"
                    className="w-full rounded-full border py-1 pl-4 pr-10 text-text font-header text-base font-medium"
                    placeholder="Search Blogs"
                    value={searchTerm}
                    onChange={(e) => setSeachTerm(e.target.value)}
                />
                <button
                    type="submit"
                    className="hover absolute right-4 text-gray-500 transition-colors hover:text-primary"
                >
                    <Search size="x-small" />
                </button>
            </form>
        );
    }

    return (
        <form className="group relative flex items-center p-1" action="/">
            <input
                id="searchTerm"
                name="searchTerm"
                type="text"
                className={`w-12 rounded-full border shadow-sm py-1 pl-12 font-header text-base text-text font-medium transition-all focus:w-80 focus:pl-4 focus:pr-10 group-hover:w-80 group-hover:pl-4 group-hover:pr-10 ${
                    searchTerm.length > 0 ? "w-80 !pl-4 !pr-10" : ""
                }`}
                value={searchTerm}
                onChange={(e) => setSeachTerm(e.target.value)}
            />
            <button
                type="submit"
                className="hover absolute right-4 text-gray-500 transition-colors hover:text-primary"
            >
                <Search size="x-small" />
            </button>
        </form>
    );
}
