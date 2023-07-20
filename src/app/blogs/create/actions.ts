"use server";

export async function createBlog(data: FormData) {
    await new Promise((res) => setTimeout(res, 2500));

    console.log(data);
}
