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
        id: 'snippet-1',
        sidebartitle: 'Mac settings.json',
        description: 'Settings.json for VSC with Warp (rust terminal) configuration',
        language: 'autohotkey',
        code: `
    {
        "editor.formatOnSave": false,
        "css.validate": false,
        "scss.validate": false,
        "workbench.colorCustomizations": {
          "commandCenter.border": "#e7e7e799",
          "sash.hoverBorder": "#3399ff",
          "titleBar.activeBackground": "#007fff",
          "titleBar.activeForeground": "#e7e7e7",
          "titleBar.inactiveBackground": "#007fff99",
          "titleBar.inactiveForeground": "#e7e7e799"
        },
        "peacock.color": "#007fff",
        "terminal.integrated.aliases": {
          "warp": "cd /Users/remcostoeten/Documents"
        },
        "terminal.integrated.defaultProfile.osx": "/bin/bash",
        "terminal.integrated.profiles.osx": {
          "bash": {
            "path": "/bin/bash",
            "args": [
              "-c",
              "source {{path/to/warp.sh}} && exec bash"
            ]
          }
        }
      }
    `,
    },
];

const vsc = () => {
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
                    <h1 className="text-4xl text-slate-100 font-bold mb-4 intro-title">Visual studio code settings for OSX</h1>
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
                        Settings.json for my Mac VSC configuration with Warp terminal.
                    </p>
                    <div className="my-8 main-docs" id="settings">
                        <h2 className="text-2xl font-bold mb-2">settings.json:</h2>
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

export default vsc;
