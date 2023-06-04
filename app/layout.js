'use client';
import PreLoader from '@/components/ui-elements/Preloader';
import './globals.scss';
import { Inter, Roboto } from 'next/font/google';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700', '900'],
	style: ['italic', 'normal'],
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={roboto.className + ''}>
				{/* <Link className="container" href="/" className="ml-4">
					<Logo />
				</Link> */}
				<div className="flex  md:flex-row flex-col">
					<>
						<Preloader />
						<div className="initialHide"> {children}</div>
					</>
				</div>
			</body>
		</html>
	);
}
