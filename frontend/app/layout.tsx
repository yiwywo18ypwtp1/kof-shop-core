import type { Metadata } from "next";
import { Short_Stack } from "next/font/google";
import "./globals.css";

const shortStack = Short_Stack({
    variable: "--font-short-stack",
    subsets: ["latin"],
    weight: "400",
});

export const metadata: Metadata = {
    title: "Kind of Family Shop",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${shortStack.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
