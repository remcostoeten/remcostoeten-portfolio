import { useRouter } from 'next/navigation';
import { allPosts } from '@/.contentlayer/generated';
import Logo from '@/components/icons/logo';
import Link from 'next/link';
import Prism from 'prismjs';
import React, { useEffect } from 'react';
import Code from '@/components/Code';

export default function Sidebar() {
	const router = useRouter();

	return (
		<>
			<Logo />
			<div className="md:flex fixed p-6 h-screen md:justify-start flex-co hover:text-themered">
				<div className="pt-5 mt-20 border-0 border-t border-gray-600 p-0">
					{allPosts.map((post) => (
						<article className="mt-2" key={post._id}>
							<Link href="/docs">
								<h3 className="mb-[4px] px-2 text-base font-medium text-white">
									Autohotkey script
								</h3>
							</Link>
						</article>
					))}
				</div>
			</div>
		</>
	);
}
