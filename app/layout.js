'use client';
import PreLoader from '@/components/ui-elements/Preloader';
import './globals.scss';
import { Roboto } from 'next/font/google';
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
						<PreLoader />
						<div className="initialHide"> {children}</div>
					</>
				</div>
			</body>
		</html>
	);
}
