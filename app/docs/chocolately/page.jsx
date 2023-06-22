'use client';
import React, { useState } from 'react';
import Code from '@/components/Code';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Highlighter from 'react-highlight-words';
import SearchBar from '@/components/docs/SearchBar';
import CursorPointer from '@/components/Cursor';
import SidebarNav from './../../../components/docs/Sidebar';
const codeSnippets = [
    {
        id: 'snippet-1',
        sidebartitle: 'Email shortcut',
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
        id: 'snippet-2',
        sidebartitle: 'Password shortcut',
        description: 'This script maps Ctrl + r to password',
        language: 'autohotkey',
        code: `
      ; Map Ctrl + r to password
      ^r::
      Send, password{!}
      return
    `,
    },
    {
        id: 'snippet-3',
        sidebartitle: 'Alternative email shortcut',
        description: 'This script maps Ctrl + Alt + e to email.rs@gmail.com',
        language: 'autohotkey',
        code: `
      ; Map Ctrl + Alt + e to email.rs@gmail.com
      ^!e::
      Send, email.rs@gmail.com
      return
    `,
    },
    {
        id: 'snippet-4',
        sidebartitle: 'Alternative password shortcut',
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
        id: 'snippet-5',
        sidebartitle: 'Open terminal shortcut',
        description: 'This script maps Ctrl + Shift + c to open Hyper Terminal',
        language: 'autohotkey',
        code: `
      ; Map Ctrl + Shift + c to open Hyper Terminal
      ^+c::
      Run, C:\\Users\\Remco\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Hyper
      return
    `,
    },
    {
        id: 'snippet-6',
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
        id: 'snippet-7',
        description: 'This script allows sending Page Down and Page Up commands in the active browser',
        language: 'autohotkey',
        code: `
      #IfWinActive ahk_group browser
      RButton & WheelUp::Send ^{PgDn}
      RButton & WheelDown::Send ^{PgUp}
      #IfWinActive
    `,
    },
];

const fullScript = `
autohotkey
; Map Ctrl + e to email@hotmail.com
^e::
Send, email@hotmail.com
return

; Map Ctrl + r to password
^q::
Send, password{!}
return

; Map Ctrl + Alt + e to email.rs@gmail.com
^!e::
Send, email.rs@gmail.com
return
;LWin::LButton
; Map Ctrl + Alt + q to passwordtwo
^!q::
Send, passwordtwo
returntext-4xl font-bold mb-4

; Map Ctrl + Shift + c to open Hyper Terminal
^!c::
Run, C:\Users\Remco\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Hyper
return
GroupAdd, browser, ahk_exe chrome.exe
GroupAdd, browser, ahk_exe firefox.exe
GroupAdd, browser, ahk_exe msedge.exe
GroupAdd, browser, ahk_exe brave.exe
GroupAdd, browser, ahk_exe opera.exe
#IfWinActive ahk_group browser
RButton & WheelUp::Send ^{PgDn}
RButton & WheelDown::Send ^{PgUp}
#IfWinActive

`;

const Chocolatley = () => {
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
                        This is my personal Autohotkey script which I install on every new OS or computer I work on, it eliminates the need to always type out your username and password which gets
                        annoying over time.
                    </p>

                    <div className="pt-5 mt-8 p-0 main-docs">
                        <h2 className="text-2xl font-bold mb-2" id="create">
                            Create a Script:
                        </h2>
                        <ol className="list-decimal ml-6">
                            <li>Open any text editor such as Notepad or any code editor of your choice.</li>
                            <li>
                                Start a new file and save it with a <code>.ahk</code> extension. For example, <code>myscript.ahk</code>.
                            </li>
                        </ol>
                    </div>

                    <div className="my-8 main-docs">
                        <h2 className="text-2xl font-bold mb-2">Write Your Script:</h2>
                        <p>
                            Inside the <code>.ahk</code> file, you can write your AutoHotkey script using the AutoHotkey scripting language. Here's an example script that maps the Ctrl+Alt+Q key
                            combination to open a specific folder:
                        </p>
                        <Code
                            code={`autohotkey
^!q::
Run, C:\\Path\\To\\Your\\Folder
return`}
                            language="autohotkey"
                        />
                    </div>

                    <div className="my-8 main-docs">
                        <h2 className="text-2xl font-bold mb-2">Save the Script:</h2>
                        <p>
                            Save the <code>.ahk</code> script file in a location of your choice. It's recommended to save it in a folder where you can easily locate it later.
                        </p>
                    </div>

                    <div className="my-8 main-docs">
                        <h2 className="text-2xl font-bold mb-2">Run the Script:</h2>
                        <p>
                            To run the script, simply double-click on the <code>.ahk</code> file. The AutoHotkey program will launch, and your script will be active. You can now use the hotkeys or
                            triggers defined in your script.
                        </p>
                    </div>

                    <div className="my-8 main-docs">
                        <h2 className="text-2xl font-bold mb-2">Add Script to Startup:</h2>
                        <ol className="list-decimal ml-6">
                            <li>Press Win + R to open the "Run" dialog box.</li>
                            <li>
                                Type <code>shell:startup</code> and click "OK" to open the startup folder.
                            </li>
                            <li>
                                Copy the <code>.ahk</code> script file and paste it into the startup folder.
                            </li>
                            <li>The script will now run automatically every time you start your computer.</li>
                        </ol>
                    </div>
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
                                <a href="#      ">Introduction</a>
                            </li>{' '}
                            <li className="block text-gray-500 hover:text-gray-600 leading-[1.6]">
                                <a href="#download">Download Autohotkey</a>
                            </li>
                            <li className="block text-gray-500 hover:text-gray-600 leading-[1.6]">
                                <a href="#create">create script</a>
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

export default Chocolatley;
