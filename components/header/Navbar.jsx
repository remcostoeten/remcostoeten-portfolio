import { useRouter } from 'next/router';
import Link from 'next/link';
import { transform } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
	const router = useRouter();
	const [isHovered, setIsHovered] = useState(false);

	const isActive = (pathname) => {
		return router.pathname === pathname;
	};

	const handleHover = (hovered) => {
		setIsHovered(hovered);
	};

	return (
		<>
			<nav className="absolute">
				<ul className="flex flex-col">
					<li
						className="animate__animated animate__zoomInRight animate__delay-1s"
						onMouseEnter={() => handleHover(true)}
						onMouseLeave={() => handleHover(false)}
					>
						<Link
							href="/"
							className={isActive('/') ? 'active' : ''}
						>
							Home
						</Link>
					</li>
					<li className="animate__animated animate__zoomInRight animate__delay-1s">
						<Link
							href="/work"
							className={isActive('/work') ? 'active' : ''}
						>
							Work
						</Link>
					</li>
					<li className="animate__animated animate__zoomInRight animate__delay-1s">
						<Link
							href="/contact"
							className={isActive('/contact') ? 'active' : ''}
						>
							Contact
						</Link>
					</li>
					<li className="animate__animated animate__zoomInRight animate__delay-1s">
						<Link
							href="/abandoned-stuff"
							className={
								isActive('/abandoned-stuff') ? 'active' : ''
							}
						>
							Abandoned Stuff
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
