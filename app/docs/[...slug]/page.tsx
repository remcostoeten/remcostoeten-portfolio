export default async function PagePage({ params }: PageProps) {
	const page = await getPageFromParams(params);

	if (!page) {
		notFound();
	}

	return <></>;
}
