//REACT
import { ReactNode } from "react";
//NEXTJS
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
//REDUX-TOOLKIT
import { StoreProvider } from "@/store/StoreProvider";
//ERROR-BOUNDARY
import ErrorBoundary from "../components/ErrorBoundary";
//STYLES
import "../styles/index.css";


const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });


export const metadata: Metadata = {
    title: 'Application'
}

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {   
    return (
        <html lang="en">
            <body className={poppins.className}>
                <StoreProvider>
                    <ErrorBoundary> {children} </ErrorBoundary>
                </StoreProvider>
            </body>
        </html>
    )
}