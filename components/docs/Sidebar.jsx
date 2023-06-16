import { allPosts } from '@/.contentlayer/generated';
import Logo from '@/components/icons/logo';
import Link from 'next/link';
import React from 'react';

export default function SidebarNav() {
	return (
		<>
			<div className="md:flex fixed p-6 h-screen md:justify-start flex-co hover:text-themered">
				<Logo />
				<div className="pt-5 mt-20 p-0">
					{allPosts.map((post) => (
						<article className="mt-2" key={post._id}>
							<Link href="/docs">
								<h3 className="mb-[4px] px-2 text-base font-medium text-white">
									Autohotkey script
								</h3>
							</Link>
							<Link href="/powershell-config">
								<h3 className="mb-[4px] px-2 text-base font-medium text-white">
									Powershell config
								</h3>
							</Link>
							<Link href="/work-snippets">
								<h3 className="mb-[4px] px-2 text-base font-medium text-white">
									Work snippets
								</h3>
							</Link>
						</article>
					))}
				</div>
			</div>
		</>
	);
}
