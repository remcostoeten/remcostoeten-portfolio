import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
	const menuClass = [
		'text-bold grow text-offWhite text-2xl font-poppins mr-8',
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
				<ThemeSwitcher />
			</header>
		</>
	);
}
