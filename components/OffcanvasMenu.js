'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const OffCanvasMenu = () => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);
	const toggleRef = useRef(null);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
		document.body.classList.toggle('offcanvas-open');
	};

	const pageOut = () => {
		setIsOpen(false);
		document.body.classList.remove('offcanvas-open');
		document.body.classList.add('page-out');
		setTimeout(() => {
			router.push('/docs/autohotkey-startup');
		}, 1250);
	};

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('offcanvas-open');
		} else {
			document.body.classList.remove('offcanvas-open');
		}
	}, [isOpen]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<label className="toggle z-max">
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
				<div className="offcanvas-menu absolute z-max">
					<nav>
						<ul>
							<li className="leading-none flex align-middle items-center mb-14">
								<Link
									onClick={pageOut}
									className="text-5xl not-italic font-normal"
									href="url-extract"
								>
									Url extract tool
								</Link>
							</li>
							<li className="leading-none flex align-middle items-center mb-14">
								<Link href="chatgpt-prompt-creator">
									<span className="text-5xl not-italic font-normal">
										Chat GPT prompt
									</span>
								</Link>
							</li>
							<li className="leading-none flex align-middle items-center">
								<div
									onClick={pageOut}
									className="text-5xl not-italic font-normal"
								>
									Documentation
								</div>
							</li>
						</ul>
						<ul>
							<li className="leading-none flex align-middle items-center">
								<Link
									href="prism"
									className=" ext-md xl:text-lg"
								>
									Prism.js test
								</Link>
							</li>
							<li className="leading-none flex align-middle items-center">
								<Link
									href="preloader"
									className="text-md xl:text-lg"
								>
									Preloader
								</Link>
							</li>{' '}
						</ul>
					</nav>
				</div>
			)}
		</motion.div>
	);
};

export default OffCanvasMenu;
