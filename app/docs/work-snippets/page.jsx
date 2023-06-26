'use client';
import React, { useState } from 'react';
import Code from '@/components/docs/Code';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Highlighter from 'react-highlight-words';
import SearchBar from '@/components/docs/SearchBar';
import CursorPointer from '@/components/Cursor';
import SidebarNav from './../../../components/docs/Sidebar';
import { Link } from '@mui/material';

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
        setSearchResults(codeSnippets.filter((snippet) => snippet.description.toLowerCase().includes(input.toLowerCase())));
    };

    const handleDropdownItemClick = (snippet) => {
        scrollToSnippet(snippet.id);
        setShowDropdown(false);
        setSearchText('');
    };
    return (
        <>
            <div className="flex justify-center w-full min-h-screen text-slate-300">
                <SidebarNav />
                <main className="w-2/4 p-8 overflow-auto bg-[#0d0d0d]">
                    <h1 className="text-4xl text-slate-100 font-bold mb-4 intro-title">Works snippets</h1>
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
                        Snippets I use on a day to day basis at my current{' '}
                        <Link className="text-white" href="https://gitlab.com/pleio">
                            job.
                        </Link>
                        <br />
                        Nothing usefull to see here, just a place for me to store my snippets and not lose them.
                    </p>

                    <div className="my-8 main-docs" id="docker">
                        <h2 className="text-2xl font-bold mb-2">Docker FSV:</h2>
                        <Code code={` docker-compose up`} language="autohotkey" />
                        <span className="text-sm text-slate-300">init container</span>
                    </div>

                    <div className="my-8 main-docs">
                        <h2 className="text-2xl font-bold mb-2">Run containers if they're already build.</h2>
                        <Code code={`docker-compose -f docker-compose.fsv.yml up`} language="autohotkey" />
                        <span className="text-sm text-slate-300">After reboot or if Docker Desktop was just launched.</span>
                    </div>

                    <div className="my-8 main-docs">
                        <h2 className="text-2xl font-bold mb-2">Build all containers if they do not exist yet</h2>
                        <Code code={`SITE=fsv; docker-compose -f docker-compose.\${SITE}.yml -p \${SITE} up --build`} language="autohotkey" />
                    </div>

                    <div className="my-8 main-docs">
                        <h2 className="text-2xl font-bold mb-2">Reload for template changes</h2>
                        <Code code={`docker-compose -f docker-compose.fsv.yml restart web -t 1`} language="autohotkey" />
                        <span className="text-sm text-slate-300">web = container name</span>
                    </div>

                    <div className="my-8 main-docs">
                        <h2 className="text-2xl font-bold mb-2">Reindex search</h2>
                        <Code code={`docker exec <web-container-name> /app/src/manage.py update_index`} language="autohotkey" />
                    </div>
                </main>
                <aside className="w-2/12 pl-8 pt-12 shrink-0 pr-8 order-last hidden lg:block bg-[#0d0d0d]">
                    <div className="sticky right-0 top-0  pr-2 mr-0 flex flex-col">
                        <SearchBar
                            searchText={searchText}
                            onSearchInputChange={handleSearchInputChange}
                            showDropdown={setShowDropdown}
                            searchResults={searchResults}
                            onDropdownItemClick={handleDropdownItemClick}
                        />
                        <h2 className="sidebar-title mb-1 mt-[7px] text-sm font-bold text-slate-100">On this page</h2>
                        <ul className="space-y-2.5 border-b py-2 text-sm overflow-y-auto max-h-[70vh] styled-scrollbar">
                            <li className="block text-gray-500 hover:text-gray-600 leading-[1.6]">
                                <a href="#docker">Docker setup</a>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </>
    );
};

export default SnippetPage;
