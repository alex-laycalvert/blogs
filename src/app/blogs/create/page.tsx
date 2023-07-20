"use client";

import { useTransition } from "react";
import { createBlog } from "./actions";
import Button from "@/components/Button";

export default function CreateBlog() {
    const [isPending, startTransition] = useTransition();

    console.log(isPending);

    return (
        <form
            className=""
            action={(data) => startTransition(() => createBlog(data))}
        >
            <label htmlFor="title">Title</label>
            <input id="title" name="title" type="text" />
            <label htmlFor="text">Text</label>
            <input id="text" name="text" type="text" />
            <Button type="submit" text="Publish" loading={isPending} />
        </form>
    );
}
