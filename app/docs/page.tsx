import { allPosts } from '@/.contentlayer/generated';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="prose dark:prose-invert">
			{allPosts.map((post) => (
				<article key={post._id}>
					<Link href={post.slug}>
						<h3 className="mb-[4px] px-2 text-sm font-medium text-gray-700">{post.title}</h3>
					</Link>
					{post.description && <p>{post.description}</p>}
				</article>
			))}
		</div>
	);
}
