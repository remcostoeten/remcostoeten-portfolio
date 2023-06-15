'use client';
import { useRouter } from 'next/navigation';
import { allPosts } from '@/.contentlayer/generated';
import Logo from '@/components/icons/logo';
import Link from 'next/link';

export default function Home() {
	const router = useRouter();

	return (
		<>
			<Logo />
			<div className="md:flex w-[284px] md:shrink-0 bg-[#161618] p-6 top-[121px] h-[calc(100vh-121px)] md:justify-start flex-col">
				<div className="pt-5 mt-20 border-0 border-t border-gray-600 p-0">
					{allPosts.map((post) => (
						<article className="mt-2" key={post._id}>
							<Link href={post.slug}>
								<h3
									className={`mb-[4px] px-2 text-base font-medium ${
										router.asPath === post.slug
											? 'text-red-500'
											: 'text-white'
									}`}
								>
									{post.title}
								</h3>
							</Link>
						</article>
					))}
				</div>
			</div>
		</>
	);
}
