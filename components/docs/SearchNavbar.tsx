'use client';
import { Navbar, Typography, IconButton, Button, Input } from '@material-tailwind/react';
import { BellIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';
import { ModeToggle } from '../mode-toggle';
import Link from 'next/link';
import Logo from '../icons/logo';
export default function SearchNavbar() {
	return (
		<Navbar variant="gradient" color="blue-gray" className="mx-auto max-w-screen-xl from-blue-gray-900 to-blue-gray-800 px-4 py-3">
			<div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
				<Logo />
				<div className="ml-auto flex gap-1 md:mr-4">
					<IconButton variant="text" color="white">
						<Cog6ToothIcon className="h-4 w-4" />
					</IconButton>
					<IconButton variant="text" color="white">
						<BellIcon className="h-4 w-4" />
					</IconButton>
				</div>
				<header>
					<div className="flex items-center justify-between">
						<ModeToggle />
						<nav className="ml-auto text-sm font-medium space-x-6">
							<Link href="/">Home</Link>
							<Link href="/about">About</Link>
						</nav>
					</div>
				</header>
				<div className="relative flex w-full gap-2 md:w-max">
					<Input
						type="search"
						color="white"
						label="Type here..."
						className="pr-20"
						containerProps={{
							className: 'min-w-[288px]',
						}}
					/>
					<Button size="sm" color="white" className="!absolute right-1 top-1 rounded">
						Search
					</Button>
				</div>
			</div>
		</Navbar>
	);
}
