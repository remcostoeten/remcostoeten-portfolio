'use client';
import React, { useState } from 'react';
import Code from '@/components/docs/Code';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Highlighter from 'react-highlight-words';
import SearchBar from '@/components/docs/SearchBar';
import CursorPointer from '@/components/Cursor';
import SidebarNav from '../../../components/docs/Sidebar';
const codeSnippets = [
    {
        id: 'Brew',
        sidebartitle: 'Brew ',
        description: 'Current installed b rew packages',
        language: 'autohotkey',
        code: `
       brew list
        ==> Formulae
        brotli		git		mongosh		pcre2
        c-ares		icu4c		nginx		tailscale
        ca-certificates	libnghttp2	node
        gettext		libuv		node@16
        gh		mas		openssl@1.1
        ==> Casks
        background-music	ngrok			toinane-colorpicker
        firefox			simplenote		whatsapp
        google-chrome		spotify
        keyboard-maestro	tinkerwell
    `,
    },
];

const osxEnviorment = () => {
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

    const fullScript = `
    brew list
    ==> Formulae
    brotli		git		mongosh		pcre2
    c-ares		icu4c		nginx		tailscale
    ca-certificates	libnghttp2	node
    gettext		libuv		node@16
    gh		mas		openssl@1.1
   
   
    ==> Casks
    warp-terminal
    background-music
    ngrok
    toinane-colorpicker
    firefox
    simplenote
    whatsapp
    google-chrome
    spotify
    keyboard-maestrotinkerwell
    `;

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
                    <h1 className="text-4xl text-slate-100 font-bold mb-4 intro-title">Chocolatley script</h1>
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
                        All my current brew packages.
                    </p>

                    <div className="main-docs">
                        <div
                            className="-z-10"
                            onMouseEnter={() => {
                                setMouseSize(99);
                            }}
                            onMouseLeave={() => {
                                setMouseSize(25);
                            }}
                        >
                            <Code code={fullScript} language="autohotkey" />
                        </div>
                        <div>
                            {codeSnippets.map((snippet) => (
                                <div key={snippet.id} id={snippet.id} className="my-8">
                                    <Highlighter className="text-lg mb-2" searchWords={[searchText]} autoEscape={true} textToHighlight={snippet.description} />
                                    <Code code={snippet.code} language={snippet.language} />
                                    <span className="right-0 bottom-0 p-2 text-gray-400 cursor-pointer hover:text-gray-200" onClick={() => copyToClipboard(snippet.code)}>
                                        <ContentCopyIcon />
                                        Copy to Clipboard
                                    </span>
                                </div>
                            ))}
                        </div>
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
                                <a href="#      ">brew</a>
                            </li>

                            {codeSnippets.map((snippet) => (
                                <li key={snippet.id}>
                                    <a
                                        href={`#${snippet.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSnippet(snippet.id);
                                        }}
                                        className="block text-gray-500 hover:text-gray-600 leading-[1.6]"
                                    >
                                        {snippet.sidebartitle || snippet.description}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>
        </>
    );
};

export default osxEnviorment;
