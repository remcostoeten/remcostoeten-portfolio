'use client';
import { useState, useEffect } from 'react';

export default function PagePage({ slug }) {
	const [page, setPage] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const allPages = await getPages();
			const fetchedPage = allPages.find((page) => page._raw.flattenedPath.split('/').slice(1).join('/') === slug.join('/')) || null;

			setPage(fetchedPage);
		};

		fetchData();
	}, [slug]);

	if (!page) {
		return <div>Page not found</div>; // This is where you handle your 'not found' scenario
	}

	return (
		<div>
			<h1>{page.title}</h1>
			<p>{page.description}</p>
			{/* Here you can render your MDX content */}
		</div>
	);
}
