import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';

const iconVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

export default function ThemeSwitcher() {
	const [darkMode, setDarkMode] = React.useState(true);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark');
			document.documentElement.classList.remove('light');
		} else {
			document.documentElement.classList.add('light');
			document.documentElement.classList.remove('dark');
		}
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div className="theme-swticher flex items-center justify-between w-4 min-w-xs">
			<AnimatePresence exit>
				{darkMode ? (
					<motion.div
						key="light"
						layoutId="themeIcon"
						initial="hidden"
						animate="visible"
						exit="hidden"
						variants={iconVariants}
					>
						<DarkModeIcon
							onClick={toggleDarkMode}
							className="w-4 max-w-xs"
						/>
					</motion.div>
				) : (
					<motion.div
						key="dark"
						layoutId="themeIcon"
						initial="hidden"
						animate="visible"
						exit="hidden"
						variants={iconVariants}
					>
						<LightModeSharpIcon
							className="w-4"
							onClick={toggleDarkMode}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
