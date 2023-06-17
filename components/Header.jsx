import React from 'react';
import Logo from './icons/logo';
export default function Header() {
	return (
		<header className="flex items-center justify-between p-6">
			<Logo />
		</header>
	);
}
