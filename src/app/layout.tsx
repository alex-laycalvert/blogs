import { getServerAuthSession } from "@/server/auth";
import NavBar from "@/components/NavBar";

import "./globals.css";

export const metadata = {
    title: "Blogs",
    description: "Just basic blogs",
};

type Props = {
    children?: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
    const session = await getServerAuthSession();

    return (
        <html lang="en">
            <body className="flex h-screen w-full flex-col overflow-hidden bg-background">
                <NavBar user={session?.user} />
                <main className="z-10 mt-20 w-full overflow-y-auto">
                    <div className="h-96 w-full bg-primary"></div>
                    <div className="h-96 w-full bg-secondary"></div>
                    <div className="h-96 w-full bg-success"></div>
                    <div className="h-96 w-full bg-error"></div>
                    <div className="h-96 w-full bg-primary"></div>
                    <div className="h-96 w-full bg-secondary"></div>
                    {children}
                </main>
            </body>
        </html>
    );
}
