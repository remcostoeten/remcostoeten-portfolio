import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { allPages } from 'contentlayer/generated';

import { Mdx } from '@/components/mdx-components';

interface PageProps {
	params: {
		slug: string[];
	};
}

async function getPageFromParams(params: PageProps['params']) {
	const slug = params?.slug?.join('/');
	const page = allPages.find((page) => page.slugAsParams === slug);

	if (!page) {
		null;
	}

	return page;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const page = await getPageFromParams(params);

	if (!page) {
		return {};
	}

	return {
		title: page.title,
		description: page.description,
	};
}

export async function generateStaticParams(): Promise<PageProps['params'][]> {
	return allPages.map((page) => ({
		slug: page.slugAsParams.split('/'),
	}));
}

export default async function PagePage({ params }: PageProps) {
	const page = await getPageFromParams(params);

	if (!page) {
		notFound();
	}

	return (
		<>
			<header className="sticky top-0 z-50 flex items-center justify-between px-3 py-2 border-b shadow-lg bg-white/90 backdrop-blur-sm border-slate-400/40">
				<div className="flex items-center flex-grow basis-0">
					<a href className="text-lg font-semibold tracking-tight text-slate-900">
						<h1>{page.title}</h1>
					</a>
				</div>
				<form action="https://duckduckgo.com/" className="md:w-80 lg:w-96">
					<span className="relative flex items-center group">
						<svg
							aria-hidden="true"
							viewBox="0 0 20 20"
							className="absolute w-4 h-4 ml-3 fill-slate-400 group-hover:fill-slate-500 group-focus:fill-slate-500"
						>
							<path d="M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z" />
						</svg>
						<input
							type="text"
							name="q"
							placeholder="Search docs…"
							className="w-full py-2 pl-10 pr-2 border rounded bg-slate-100 placeholder-slate-400 text-slate-800 border-slate-100 outline outline-offset-2 outline-2 outline-transparent hover:border-slate-200 focus:border-slate-200 focus:outline-slate-600"
						/>
					</span>
					<input type="hidden" name="sites" defaultValue="spinalcms.com" />
					<input type="submit" defaultValue="Search" className="sr-only" />
				</form>
				<div className="items-center justify-end flex-grow hidden basis-0 md:flex">
					<a
						href="https://spinalcms.com/"
						className="px-4 py-2 text-sm font-semibold rounded bg-slate-900 text-slate-50 transition ease-in-out delay-75 hover:scale-105 duration-200"
					>
						Go to homepage
					</a>
				</div>
			</header>
			<article className="py-6 prose dark:prose-invert">
				{page.description && <p className="text-xl">{page.description}</p>}
				<hr />
				<Mdx code={page.body.code} />
			</article>
		</>
	);
}
