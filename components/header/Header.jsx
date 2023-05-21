import React from 'react';
import Logo from './Logo';
import Link from 'next/link';

export default function Header() {
	const menuClass = [
		'text-bold',
		'text-offWhitem,',
		'text-2xl',
		'font-poppins',
	];

	return (
		<>
			<header className="flex items-center justify-between">
				<Logo />
				<nav>
					<ul className="flex text-offWhite">
						<li>
							{/* impleemtn const menuclass as class for thje link */}
							<Link className={menuClass} href="#">
								Tools
							</Link>
						</li>
						<li>
							<Link className={menuClass} href="#">
								Work
							</Link>
						</li>
						<li>
							<Link className={menuClass} href="#">
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
