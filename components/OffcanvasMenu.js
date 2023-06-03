import Link from 'next/link';
import React, { useState, useRef } from 'react';
const OffCanvasMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleRef = useRef(null);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleToggle = () => {
		setMenuOpen(!menuOpen);
		if (!menuOpen) {
			document.body.classList.add('offcanvas-open');

			setTimeout(() => {
				document.body.classList.add('menu-delay');
			}, 500);
		} else {
			document.body.classList.remove('offcanvas-open');
			document.body.classList.remove('menu-delay');
		}
	};

	return (
		<>
			<label className="toggle">
				<input type="checkbox" ref={toggleRef} onClick={toggleMenu} />
				<div className="toggle__inner">
					<div>
						<span></span>
						<span></span>
					</div>
					<svg>
						<use xlinkHref="#path" />
					</svg>
					<svg>
						<use xlinkHref="#path" />
					</svg>
				</div>
			</label>
			<svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
				<symbol
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 44 44"
					id="path"
				>
					<path d="M22,22 L2,22 C2,11 11,2 22,2 C33,2 42,11 42,22"></path>
				</symbol>
			</svg>
			{isOpen && (
				<div className="offcanvas-menu">
					<nav>
						<ul>
							<li>
								<Link
									href="
							url-extract"
								>
									Url extract tool
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			)}
		</>
	);
};

export default OffCanvasMenu;
