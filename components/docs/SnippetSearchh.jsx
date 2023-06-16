import React, { useState } from 'react';
import Highlighter from 'react-highlight-words';

const SnippetSearch = ({ snippets }) => {
    const [searchText, setSearchText] = useState('');

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

    const sortedSnippets = [...snippets].sort((a, b) =>
        b.description.toLowerCase().includes(searchText.toLowerCase()) ? 1 : -1
    );

    return (
        <>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="px-3 py-2 border rounded"
                />
            </div>
            <div>
                {sortedSnippets.map((snippet) => (
                    <div key={snippet.id} id={snippet.id} className="my-8">
                        <Highlighter
                            className="text-lg mb-2"
                            searchWords={[searchText]}
                            autoEscape={true}
                            textToHighlight={snippet.description}
                        />
                        <pre>
                            <code>{snippet.code}</code>
                        </pre>
                        <span
                            className="right-0 bottom-0 p-2 text-gray-400 cursor-pointer hover:text-gray-200"
                            onClick={() => copyToClipboard(snippet.code)}
                        >
                            Copy to Clipboard
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SnippetSearch;

