import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerAuthSession();

    if (!session?.user) {
        redirect("/api/auth/signin");
    }

    return <>{children}</>;
}
