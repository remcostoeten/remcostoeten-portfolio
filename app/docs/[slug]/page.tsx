import { notFound } from 'next/navigation';
import { allDocs } from 'contentlayer/generated';

import { getTableOfContents } from '@/lib/toc';
import { Mdx } from '@/a/mdx-components';
import { DocsPageHeader } from '@/a/page-header';
import { DocsPager } from '@/a/pager';
import { DashboardTableOfContents } from '@/a/toc';

import '@/styles/mdx.css';
import { Metadata } from 'next';

import { absoluteUrl } from '@/lib/utils';

interface DocPageProps {
	params: {
		slug: string[];
	};
}
interface doc {
	doc: string[];
	description: string;
	title: string;
}
// async function getDocFromParams(params) {
// 	const slug = params.slug?.join('/') || '';
// 	const doc = allDocs.find((doc) => doc.slugAsParams === slug);

// 	if (!doc) {
// 		null;
// 	}

// 	return doc;
// }

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
	// const doc = await getDocFromParams(params);

	// if (!doc) {
	// return {};
	// }

	const doc = 'doc';

	const url = 'localhost:3000';
	const ogUrl = new URL(`${url}/api/og`);
	ogUrl.searchParams.set('heading', (doc.description as string) ?? doc.title);
	ogUrl.searchParams.set('type', 'Documentation');
	ogUrl.searchParams.set('mode', 'dark');

	return {
		title: doc.title,
		description: doc.description,
		openGraph: {
			title: doc.title,
			description: doc.description,
			type: 'article',
			url: absoluteUrl(doc.slug),
			images: [
				{
					url: ogUrl.toString(),
					width: 1200,
					height: 630,
					alt: doc.title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: doc.title,
			description: doc.description,
			images: [ogUrl.toString()],
		},
	};
}

export async function generateStaticParams(): Promise<DocPageProps['params'][]> {
	return allDocs.map((doc) => ({
		slug: doc.slugAsParams.split('/'),
	}));
}

export default async function DocPage({ params }: DocPageProps) {
	return <DocsPager doc={doc} />;
}
