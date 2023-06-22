import { allPosts } from '@/.contentlayer/generated';
import Link from 'next/link';

export default function Home() {
    return (
        <div className=" md:flex w-1/4 md:shrink-0  bg-[#000] p-6 top-[121px] h-[calc(100vh-121px)] md:justify-start flex-col">
            {allPosts.map((post) => (
                <article className="" key={post._id}>
                    <Link href={post.slug}>
                        <h3 className="mb-[4px] px-2 text-lg font-medium text-white">{post.title}</h3>
                    </Link>
                    <li className="flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm text-gray-500 hover:text-gray-400">
                        {post.description && <p>{post.description}</p>}
                    </li>
                </article>
            ))}
        </div>
    );
}
