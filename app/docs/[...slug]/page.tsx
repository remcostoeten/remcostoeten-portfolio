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

<<<<<<< HEAD
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const page = await getPageFromParams(params);
=======
export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const page = await getPageFromParams(params);
>>>>>>> refs/remotes/origin/master

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
			<article className="w-3/6 bg-zinc-900 text-white p-6  min-w-0 max-w-6xl mt-4 px-1 md:px-6">
				<hr />
				<Mdx code={page.body.code} />
			</article>
			<aside className="w-1/6">
				<h2> dwdw</h2>
			</aside>
		</>
	);
}
