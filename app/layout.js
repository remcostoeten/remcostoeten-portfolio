'use client';
import Logo from '@/components/icons/logo';
import './globals.scss';
import { Inter, Roboto } from 'next/font/google';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700', '900'],
	style: ['italic', 'normal'],
});
import { MouseSizeProvider } from '@/components/MouseSizeProvider';

export const metadata = {
	title: 'Hello i am remco from ...🔥',
	description:
		'Remco Stoeten, front-end developer with six years experience aspiring to be more than just a so called "divjesschuiver. Site for contact information, showcase of projects (Works in progress) and several tools like URL Extract tools and todo / kanban board"',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				{/* <Link className="container" href="/" className="ml-4">
					<Logo />
				</Link> */}
				<div className="flex md:flex-row flex-col">{children}</div>
			</body>
		</html>
	);
}
