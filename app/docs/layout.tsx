import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';
import React from 'react';
import AsideDocs from '@/components/docs/Aside';
import SearchNavigation from '@/components/docs/SearchNavbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Hello i am remco from ...🔥',
    description:
        'Remco Stoeten, front-end developer with six years experience aspiring to be more than just a so called "divjesschuiver. Site for contact information, showcase of projects (Works in progress) and several tools like URL Extract tools and todo / kanban board"',
};
interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={`antialiased docs bg-themered min-h-screen  text-slate-900 dark:text-slate-50 ${inter.className}`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {/* <SearchNavigation /> */}
                    <div className="flex">{children}</div>
                </ThemeProvider>
            </body>
        </html>
    );
}
