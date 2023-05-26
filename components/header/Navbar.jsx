import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar({ handleHover }) {
	const router = useRouter();
	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick(true);
		document.body.classList.add('menu-clicked');
		setTimeout(() => {
			document.body.classList.remove('menu-clicked');
			document.body.classList.add('menu-clicked--post');
			setClick(false);
		}, 3000);
	};

	const isActive = (pathname) => {
		return router.pathname === pathname ? 'active' : '';
	};

	return (
		<>
			<nav className="absolute left-4 text-white top-1/2 transform -translate-y-1/2">
				<ul className="flex flex-col">
					<li
						className={`pb-10 animate__animate custom-padding animate__zoomInRight animate__delay-1s text-xxl ${isActive(
							'/',
						)}`}
						onClick={handleClick}
						onMouseEnter={() => handleHover(true)}
						onMouseLeave={() => handleHover(false)}
					>
						<Link href="/" className="text-36">
							Home
						</Link>
					</li>
					<li
						className={`pb-10 animate__animated animate__zoomInRight custom-padding animate__delay-1s ${isActive(
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
						className={` animate__animated custom-padding animate__zoomInRight animate__delay-1s ${isActive(
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
