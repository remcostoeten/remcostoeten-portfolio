import { useEffect, useState } from 'react';

export default function Navbar() {
	const [toggleMenu, setToggleMenu] = React.useState(false);

	const toggleNav = () => {
		setToggleMenu(!toggleMenu);
	};

	return (
		<>
			<nav>
				<ul className="flex flex-col">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/">Work</Link>
					</li>
					<li>
						<Link href="/">Contact</Link>
					</li>
					<li>
						<Link href="/">abandoned stuff</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
