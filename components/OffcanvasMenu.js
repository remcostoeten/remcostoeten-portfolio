import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './OffCanvasMenu.module.css';

const OffCanvasMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.container}>
			<button className={styles.menuButton} onClick={toggleMenu}>
				Menu
			</button>
			<motion.div
				className={`${styles.menu} ${isOpen ? styles.open : ''}`}
				initial={{ x: '100%' }}
				animate={{ x: isOpen ? 0 : '100%' }}
				transition={{ type: 'spring', damping: 20, stiffness: 300 }}
			>
				<ul>
					<li>Menu Item 1</li>
					<li>Menu Item 2</li>
					<li>Menu Item 3</li>
				</ul>
			</motion.div>
		</div>
	);
};

export default OffCanvasMenu;
