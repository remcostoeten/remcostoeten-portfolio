import Link from 'next/link';
import React from 'react';
export default function TopNotice() {

	return (
		<div className="top-nav py-2 relative isolate flex md:items-center gap-x-6 overflow-hidden text-gray-400 bg-gray-900  px-6 py-1.5 sm:px-1.5 sm:before:flex-1 flex-col just md:flex-row">
			<div
				className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
				aria-hidden="true"
			></div>
			<div
				className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
				aria-hidden="true"
			></div>
			<div className="flex md: flex-wrap items-center gap-x-2 gap-y-1 items-center">
				<p className="text-sm leading-6 text-gray-400">
					You’re currently on{' '}
					<span className="font-semibold">
						<Link href="/">experiments.remcostoeten.com</Link>
					</span>
					<svg
						viewBox="0 0 2 2"
						className="mx-2 inline h-0.5 w-0.5 fill-current"
						aria-hidden="true"
					>
						<circle cx={1} cy={1} r={1} />
					</svg>
					Click{' '}
					<Link className="font-bold" href="https://remcostoeten.com">
						here{' '}
					</Link>
					to navigate to the main site. or to view my snippets/docs{' '}
					<Link
						href="https://snippets.remcostoeten.com"
						className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm link link--arrow"
					>
						Click here <span aria-hidden="true">&rarr;</span>
					</Link>{' '}
					Everything is WiP.
				</p>
			</div>
			<div className="flex flex-1 justify-end">
				<button
					type="button"
					className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
				>
					<span className="sr-only">Dismiss</span>
				</button>
			</div>
		</div>
	);
}
