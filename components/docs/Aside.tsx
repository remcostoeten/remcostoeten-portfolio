import { allPosts } from '@/.contentlayer/generated';
import Link from 'next/link';

export default function AsideDocs() {
	return (
		<>
			<div className="bg-[#000] py-10 px-4">
				<h3 className="mb-[4px] px-2 text-sm font-medium text-white">
					Producitivty scripts
				</h3>{' '}
				{allPosts.map((post) => (
					<ul className="last-of-type:pb-3" key={post._id}>
						<li className="my-1.5 ml-[3px]">
							<Link href={post.slug}>
								<h2 className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-300">
									{post.title}
								</h2>
							</Link>
						</li>
					</ul>
				))}
			</div>
		</>
	);
}
