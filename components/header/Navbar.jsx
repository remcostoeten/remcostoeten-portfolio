import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar({ handleHover }) {
	const router = useRouter();

	const isActive = (pathname) => {
		return router.pathname === pathname ? 'active' : '';
	};

	return (
		<>
			<nav className="absolute">
				<ul className="flex flex-col">
					<li
						className={`animate__animated animate__zoomInRight animate__delay-1s text-xxl ${isActive(
							'/',
						)}`}
						onMouseEnter={() => handleHover(true)}
						onMouseLeave={() => handleHover(false)}
					>
						<Link href="/" className="text-36">
							Home
						</Link>
					</li>
					<li
						className={`animate__animated animate__zoomInRight animate__delay-1s ${isActive(
							'/work',
						)}`}
						onMouseEnter={() => handleHover(true)}
						onMouseLeave={() => handleHover(false)}
					>
						<Link href="/work" className="text-36">
							Work
						</Link>
					</li>
					<li
						className={`animate__animated animate__zoomInRight animate__delay-1s ${isActive(
							'/test',
						)}`}
						onMouseEnter={() => handleHover(true)}
						onMouseLeave={() => handleHover(false)}
					>
						<Link href="/test" className="text-36">
							Mouse effect
						</Link>
					</li>
					{/* Add similar onMouseEnter and onMouseLeave events to other li elements */}
					{/* The rest of your code */}
				</ul>
			</nav>
		</>
	);
}
