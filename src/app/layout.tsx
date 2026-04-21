import "./globals.css";
import type { Metadata } from "next";
import NavBar from "@/app/layoutElements/NavBar";

export const metadata: Metadata = {
    title: "YOUSSIF PORTFOLIO",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="relative">
        <NavBar />
        <main className="relative z-10">
            {children}
        </main>
        </body>
        </html>
    );
}