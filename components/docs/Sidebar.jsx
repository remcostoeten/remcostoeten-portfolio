import Logo from '@/components/icons/logo';
import Link from 'next/link';
import React from 'react';

export default function SidebarNav() {
    const liClass = 'block text-gray-500 hover:text-gray-600 leading-[1.6] mb-2';

    return (
        <>
            <div className="md:flex  p-6 h-screen w-2/12 md:justify-start flex-co hover:text-themered">
                <div className="fixed left-sidebar">
                    <div className="pt-5 mt-px p-0">
                        <div className="mt-2">
                            <h2 className="pb-8">All my personal scripts</h2>
                            <Link className={liClass} href="/docs/autohotkey-startup">
                                <h3 className=" block cursor-pointer text-gray-500 hover:text-gray-600 leading-[1.6]">Autohotkey script</h3>
                            </Link>
                            <Link className={liClass} href="/docs/chocolately">
                                <h3 className="cursor-pointer block text-gray-500 hover:text-gray-600 leading-[1.6]">Chocolately packages</h3>
                            </Link>
                            <Link className={liClass} href="/docs/work-snippets">
                                <h3 className="cursor-pointer block text-gray-500 hover:text-gray-600 leading-[1.6]">Work snippets</h3>
                            </Link>
                            <Link className={liClass} href="/docs/powershell-config">
                                <h3 className="cursor-pointer block text-gray-500 hover:text-gray-600 leading-[1.6]">Powershell config</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
