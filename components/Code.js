'use client';
import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-autohotkey';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js';

export default function Code({ code, language }) {
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	return (
		<div className="Code">
			<pre className="line-numbers">
				<code
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
	);
}
