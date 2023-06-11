export async function getStaticProps(context: { params: { slug: never[] } }) {
	const slug = context.params?.slug || [];
	const allPages = await getPages();
	const page =
		allPages.find(
			(page: { _raw: { flattenedPath: string } }) => page._raw.flattenedPath.split('/').slice(1).join('/') === slug.join('/'),
		) || null;

	return { props: { page, params: context.params } };
}

export default function PagePage({ page }) {
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
