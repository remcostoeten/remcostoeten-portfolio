import './globals.scss';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Hello i am remco from ...🔥',
	description:
		'Remco Stoeten, front-end developer with six years experience aspiring to be more than just a so called "divjesschuiver. Site for contact information, showcase of projects (Works in progress) and several tools like URL Extract tools and todo / kanban board"',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
