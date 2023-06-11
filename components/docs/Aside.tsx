import { allPosts } from '@/.contentlayer/generated';
import Link from 'next/link';

export default function AsideDocs() {
	return (
		<div className="prose aside dark:prose-invert  py-10 px-4">
			{allPosts.map((post) => (
				<article key={post._id}>
					<Link href={post.slug}>
						<h2>{post.title}</h2>
					</Link>
					{post.description && <p>{post.description}</p>}
				</article>
			))}
		</div>
	);
}
