import React, { useEffect, useState, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-autohotkey';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js';

export default function Code({ code, language }) {
	const [showCopy, setShowCopy] = useState('');
	const codeRef = useRef(null);

	useEffect(() => {
		Prism.highlightAll();
	}, []);

	const handleCopyClick = () => {
		const codeElement = codeRef.current;
		const range = document.createRange();
		range.selectNode(codeElement);
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(range);
		document.execCommand('copy');
		window.getSelection().removeAllRanges();
		setShowCopy('Copied!');

		setTimeout(() => {
			setShowCopy('');
		}, 2000);
	};

	return (
		<>
			{showCopy && (
				<div className="absolute copied z-10 top-5 right-4">
					Copied!
				</div>
			)}
			<div className="Code relative">
				<div
					onClick={handleCopyClick}
					className="absolute z-10 top-5 right-4"
				>
					Copy
				</div>
				<pre className="line-numbers">
					<code
						ref={codeRef}
						className={`language-${language}`}
						dangerouslySetInnerHTML={{
							__html: Prism.highlight(
								code,
								Prism.languages[language],
								language,
							),
						}}
					/>
				</pre>
			</div>
		</>
	);
}
