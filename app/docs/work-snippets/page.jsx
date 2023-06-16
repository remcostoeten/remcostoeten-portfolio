'use client';
import React, { useState } from 'react';
import Code from '@/components/Code';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Highlighter from 'react-highlight-words';
import SearchBar from '@/components/docs/SearchBar';
import CursorPointer from '@/components/Cursor';
import DocNavigation from '../../../components/docs/docNavigation';
import Link from 'next/link';

const codeSnippets = [
	{
		id: 'snippet-1',
		sidebartitle: 'Docker setup',
		description: 'Setup docker for local environment on OSX',
		language: 'docker',
		code: `docker-compose up
docker2
    `,
	},
];

const SnippetPage = () => {
	const [searchText, setSearchText] = useState('');
	const [showDropdown, setShowDropdown] = useState(false);
	const [searchResults, setSearchResults] = useState([]);
	const [mouseSize, setMouseSize] = useState(25);

	const copyToClipboard = (text) => {
		navigator.clipboard.writeText(text);
	};

	const scrollToSnippet = (snippetId) => {
		const snippetElement = document.getElementById(snippetId);
		if (snippetElement) {
			snippetElement.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleSearchInputChange = (e) => {
		const input = e.target.value;
		setSearchText(input);
		setShowDropdown(input.trim().length > 0);
		setSearchResults(
			codeSnippets.filter((snippet) =>
				snippet.description.toLowerCase().includes(input.toLowerCase()),
			),
		);
	};

	const handleDropdownItemClick = (snippet) => {
		scrollToSnippet(snippet.id);
		setShowDropdown(false);
		setSearchText('');
	};
	return (
		<>
			<CursorPointer size={25} emoji="" />
			<div className="flex justify-center w-full min-h-screen text-slate-300">
				<DocNavigation />
				<main className="w-8/12 p-8 overflow-auto bg-[#0d0d0d]">
					<h1 className="text-4xl text-slate-100 font-bold mb-4">
						Snippets for work
					</h1>
					<p
						className="intro-heading"
						id="introduction"
						onMouseEnter={() => {
							setMouseSize(155);
						}}
						onMouseLeave={() => {
							setMouseSize(25);
						}}
					>
						Some snippets I use on a regular basis at the{' '}
						<Link href="https://gitlab.com/pleio">company </Link> I
						work at, which builds open source software. Nothing
						fancy to see here. Atleast I won't lose them here. 😅
					</p>
					<div className="my-8" id="docker">
						<h2 className="text-2xl font-bold mb-2">
							Docker setup FSV
						</h2>
					</div>
					Generate all containers if they don't exist yet
					<Code code="docker-compose up" language="docker" />
				</main>
				<aside className="w-2/12 box-content pl-8 pt-12 shrink-0 pr-8 order-last hidden lg:block bg-[#0d0d0d]">
					<div className="fixed">
						<SearchBar
							searchText={searchText}
							onSearchInputChange={handleSearchInputChange}
							showDropdown={setShowDropdown}
							searchResults={searchResults}
							onDropdownItemClick={handleDropdownItemClick}
						/>
						<h2 className="sidebar-title mb-1 mt-[7px] text-sm font-bold text-slate-100">
							On this page
						</h2>
						<ul className="space-y-2.5 border-b py-2 text-sm overflow-y-auto max-h-[70vh] styled-scrollbar">
							<li className="block text-gray-500 hover:text-gray-600 leading-[1.6]">
								<a href="docker">Setup docker containers</a>
							</li>{' '}
						</ul>
					</div>
				</aside>
			</div>
		</>
	);
};

export default SnippetPage;
