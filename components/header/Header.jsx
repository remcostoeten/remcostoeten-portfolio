import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
	const menuClass = [
		'text-bold grow text-offWhite text-2xl font-poppins mr-8',
	];

	const variants = {
		hidden: { opacity: 0, x: -20 },
		visible: { opacity: 1, x: 0 },
	}

	return (
		<>
			<header className="flex items-center justify-between">
				<Logo />
				<nav>
					<ul className="flex text-offWhite">
						<motion.li
							initial="hidden"
							animate="visible"
							variants={variants}
							transition={{ duration: 0.5 }}
						>
							<Link className={menuClass} href="#">
								Tools
							</Link>
						</motion.li>
						<motion.li
							initial="hidden"
							animate="visible"
							variants={variants}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<Link className={menuClass} href="#">
								Work
							</Link>
						</motion.li>
						<motion.li
							initial="hidden"
							animate="visible"
							variants={variants}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							<Link className={menuClass} href="#">
								Contact
							</Link>
						</motion.li>
					</ul>
				</nav>
				<ThemeSwitcher />
			</header>
		</>
	);
}
