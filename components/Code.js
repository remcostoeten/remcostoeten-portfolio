'use client';
import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-autohotkey';

export default function Code({ code, language }) {
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	return (
		<div className="Code">
			<pre>
				<code
					className={`language-${language}`}
					dangerouslySetInnerHTML={{
						__html: Prism.highlight(
							code,
							Prism.languages[language],
							language,
						),
					}}
				></code>
			</pre>
		</div>
	);
}
