'use client';

import { useClipboard } from 'react-use';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useRouter } from 'next/navigation';
import { allPosts } from '@/.contentlayer/generated';
import { useEffect } from 'react';
import Code from '@/components/Code';
import Sidebar from '@/components/docs/Sidebar';
import Prism from 'prismjs';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function Home(language, code) {
	const router = useRouter();

	// Copy code snippet to clipboard
	const copyToClipboard = (text) => {
		navigator.clipboard.writeText(text);
	};

	// Highlight code using Prism.js
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	const codeSnippets = [
		{
			description: 'This script maps Ctrl + e to email@hotmail.com',
			language: 'autohotkey',
			code: `
        ; Map Ctrl + e to email@hotmail.com
        ^e::
        Send, email@hotmail.com
        return
        `,
		},
		{
			description: 'This script maps Ctrl + r to password',
			language: 'autohotkey',
			code: `
        ; Map Ctrl + r to password
        ^q::
        Send, password{!}
        return
        `,
		},
		{
			description:
				'This script maps Ctrl + Alt + e to email.rs@gmail.com',
			language: 'autohotkey',
			code: `
        ; Map Ctrl + Alt + e to email.rs@gmail.com
        ^!e::
        Send, email.rs@gmail.com
        return
        `,
		},
		{
			description: 'This script maps Ctrl + Alt + q to passwordtwo',
			language: 'autohotkey',
			code: `
        ; Map Ctrl + Alt + q to passwordtwo
        ^!q::
        Send, passwordtwo
        return
        `,
		},
		{
			description:
				'This script maps Ctrl + Shift + c to open Hyper Terminal',
			language: 'autohotkey',
			code: `
        ; Map Ctrl + Shift + c to open Hyper Terminal
        ^!c::
        Run, C:\\Users\\Remco\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Hyper
        return
        `,
		},
		{
			description: 'These scripts group different browsers',
			language: 'autohotkey',
			code: `
        GroupAdd, browser, ahk_exe chrome.exe
        GroupAdd, browser, ahk_exe firefox.exe
        GroupAdd, browser, ahk_exe msedge.exe
        GroupAdd, browser, ahk_exe brave.exe
        GroupAdd, browser, ahk_exe opera.exe
        `,
		},
		{
			description:
				'This script allows sending Page Down and Page Up commands in the active browser',
			language: 'autohotkey',
			code: `
        #IfWinActive ahk_group browser
        RButton & WheelUp::Send ^{PgDn}
        RButton & WheelDown::Send ^{PgUp}
        #IfWinActive
        `,
		},
	];

	return (
		<div className="flex w-full min-h-screen bg-gray-900 text-white">
			<aside className="w-1/4 h-screen overflow-auto bg-[#0d0d0d]">
				<Sidebar />
			</aside>
			<main className="w-3/4 p-8 overflow-auto bg-[#242424]">
				{allPosts.map((post) => (
					<article className="mb-16 last:mb-0 relative">
						<h1 className="text-4xl font-bold mb-4">
							{post.title}
						</h1>
						<h2 className="text-2xl mb-6">{post.description}</h2>
						{codeSnippets.map((snippet) => (
							<div className="my-8">
								<p className="text-lg mb-2">
									{snippet.description}
								</p>
								<Code
									code={snippet.code}
									language={snippet.language}
								/>
								<span
									className="absolute right-0 bottom-0 p-2 text-gray-400 cursor-pointer hover:text-gray-200"
									onClick={() =>
										copyToClipboard(snippet.code)
									}
								>
									<ContentCopyIcon />
									Copy to Clipboard
								</span>
							</div>
						))}
					</article>
				))}
			</main>
		</div>
	);
}
