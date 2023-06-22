import { Poppins } from 'next/font/google';
import { Roboto } from 'next/font/google';
import './globals.scss';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700', '900'],
    style: ['italic', 'normal'],
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700', '900'],
});

export const metadata = {
    title: 'Hello i am remco from ...🔥',
    description:
        'Remco Stoeten, front-end developer with six years experience aspiring to be more than just a so called "divjesschuiver. Site for contact information, showcase of projects (Works in progress) and several tools like URL Extract tools and todo / kanban board"',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={roboto.className + ' ' + poppins.className}>{children}</body>
        </html>
    );
}
