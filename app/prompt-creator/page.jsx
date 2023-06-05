'use client';
import { useState } from 'react';

export default function Page() {
	const [selectedText1, setSelectedText1] = useState(
		'senior frontend developer',
	);
	const [selectedText2, setSelectedText2] = useState('NextJS');
	const [customText, setCustomText] = useState('');
	const [includeUseClient, setIncludeUseClient] = useState(false);
	const [selectedTools, setSelectedTools] = useState([]);
	const [generatedMessage, setGeneratedMessage] = useState('');

	const handleText1Change = (e) => {
		setSelectedText1(e.target.value);
		generateMessage(
			selectedText2,
			e.target.value,
			customText,
			selectedTools,
		);
	};

	const handleText2Change = (e) => {
		setSelectedText2(e.target.value);
		generateMessage(
			e.target.value,
			selectedText1,
			customText,
			selectedTools,
		);
	};

	const handleCustomTextChange = (e) => {
		setCustomText(e.target.value);
		generateMessage(
			selectedText2,
			selectedText1,
			e.target.value,
			selectedTools,
		);
	};

	const handleIncludeUseClientChange = (e) => {
		setIncludeUseClient(e.target.checked);
		generateMessage(
			selectedText2,
			selectedText1,
			customText,
			selectedTools,
		);
	};

	const handleToolSelection = (e) => {
		const tool = e.target.value;
		if (e.target.checked) {
			setSelectedTools((prevSelectedTools) => [
				...prevSelectedTools,
				tool,
			]);
		} else {
			setSelectedTools((prevSelectedTools) =>
				prevSelectedTools.filter((prevTool) => prevTool !== tool),
			);
		}
	};

	const handleGenerateMessage = (e) => {
		e.preventDefault();
		const tools = selectedTools.join(', ');
		const message = `Act as a ${selectedText1} which has all the knowledge regarding ${selectedText2}. I want you to build a feature with ${tools} ${customText}${
			includeUseClient ? "\n'use client';" : ''
		}`;
		setGeneratedMessage(message);
	};

	const handleCopyToClipboard = () => {
		navigator.clipboard.writeText(generatedMessage);
		alert('Copied to clipboard!');
	};

	const generateMessage = (text2, text1, customText, selectedTools) => {
		const tools = selectedTools.join(', ');
		const message = `Act as a ${text1} which has all the knowledge regarding ${text2}. I want you to build a feature with ${tools} ${customText}${
			includeUseClient ? "\n'use client';" : ''
		}`;
		setGeneratedMessage(message);
	};

	return (
		<>
			<div className="container">
				<p>Chat-GPT prompt creator for developers</p>
				<section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
					<h1 className="text-xl font-bold text-white capitalize dark:text-white">
						Account settings
					</h1>
					<form onSubmit={handleGenerateMessage}>
						<div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
							<div className="flex flex-col">
								<label
									className="text-white dark:text-gray-200"
									htmlFor="username"
								>
									Act as
								</label>
								<select
									id="text1"
									value={selectedText1}
									onChange={handleText1Change}
									className="px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								>
									<option value="senior frontend developer">
										Senior Frontend Developer
									</option>
									<option value="devops engineer">
										DevOps Engineer
									</option>
									<option value="backend engineer">
										Backend Engineer
									</option>
								</select>
							</div>
							<div className="flex flex-col">
								<label
									className="text-white dark:text-gray-200"
									htmlFor="emailAddress"
								>
									Which (meta) framework
								</label>
								<select
									id="text2"
									value={selectedText2}
									onChange={handleText2Change}
									className="px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								>
									<option value="Vue 3">Vue 3</option>
									<option value="React">React</option>
									<option value="NextJS">NextJS</option>
								</select>
							</div>
						</div>
						<div className="flex items-center">
							<input
								id="includeUseClient"
								type="checkbox"
								className="mt-2 mb-2"
								checked={includeUseClient}
								onChange={handleIncludeUseClientChange}
								className="mr-2"
							/>
							<label
								className="text-white dark:text-gray-200"
								htmlFor="includeUseClient"
							>
								Include 'use client'; at line 1
							</label>
						</div>
						<div className="flex flex-col">
							<label
								className="text-white dark:text-gray-200"
								htmlFor="customText"
							>
								Custom Text:
							</label>
							<textarea
								id="customText"
								value={customText}
								onChange={handleCustomTextChange}
								className="px-2 mb-2 mt-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							></textarea>
						</div>
						<div className="flex flex-col">
							<label className="text-white dark:text-gray-200">
								Select Tools:
							</label>
							<div className="mt-2">
								<label className="inline-flex items-center text-white">
									<input
										type="checkbox"
										value="Framer Motion"
										onChange={handleToolSelection}
										className="mr-2"
									/>
									Framer Motion
								</label>
								<label className="inline-flex items-center text-white">
									<input
										type="checkbox"
										value="Firebase"
										onChange={handleToolSelection}
										className="mr-2"
									/>
									Firebase
								</label>
								<label className="inline-flex items-center text-white">
									<input
										type="checkbox"
										value="Tailwind CSS"
										onChange={handleToolSelection}
										className="mr-2"
									/>
									Tailwind CSS
								</label>
								<label className="inline-flex items-center text-white">
									<input
										type="checkbox"
										value="TypeScript"
										onChange={handleToolSelection}
										className="mr-2"
									/>
									TypeScript
								</label>
							</div>
							<div className="mt-2">
								<label className="text-white dark:text-gray-200">
									Custom Tools:
								</label>
								<input
									type="text"
									onChange={handleToolSelection}
									className="px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
							</div>
						</div>
						<button
							type="submit"
							className="px-4 py-2 mt-2 text-white rounded-md focus:outline-none"
						>
							Generate Message
						</button>
						{generatedMessage && (
							<div className="mt-4 text-white flex flex-col font-medium">
								<div className="flex flex-col">
									<h4>Generated message</h4>
									<pre className="mt-2 mb-2 p-8">
										{generatedMessage}
									</pre>
								</div>
								<button
									className="w-4 mt-2 px-4 py-2 text-white rounded-md focus:outline-none"
									onClick={handleCopyToClipboard}
								>
									Copy
								</button>
							</div>
						)}
					</form>
				</section>
			</div>
		</>
	);
}
