import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DocNavigation() {
	const router = useRouter();

	const autohotkeyRoute = '/docs/autohotkey-startup';
	const isActive = router.pathname === autohotkeyRoute;

	return (
		<>
			<aside className="w-2/12 box-content pt-8 pl-7">
				<div className="fixed">
					<h2 className="sidebar-title mb-1 mt-[7px] text-sm font-bold text-slate-100">
						All my personal snippets
					</h2>
					<ul className="space-y-2.5 border-b py-2 text-sm overflow-y-auto max-h-[70vh] styled-scrollbar">
						<li
							className={`block text-gray-500 hover:text-gray-600 leading-[1.6] ${
								isActive ? 'bg-themered' : ''
							}`}
						>
							<Link href={autohotkeyRoute}>
								Autohotkey startup script
							</Link>
						</li>
						<li
							className={`block text-gray-500 hover:text-gray-600 leading-[1.6] ${
								isActive ? 'bg-themered' : ''
							}`}
						>
							<Link href="/docs/work-snippets">
								Work snippets
							</Link>
						</li>
					</ul>
				</div>
			</aside>
		</>
	);
}
