'use client';
import { useState } from 'react';

const PromptForm = () => {
	const [selectedText1, setSelectedText1] = useState('');
	const [selectedText2, setSelectedText2] = useState('');
	const [customText, setCustomText] = useState('');
	const [generatedMessage, setGeneratedMessage] = useState('');

	const handleText1Change = (e) => {
		setSelectedText1(e.target.value);
	};

	const handleText2Change = (e) => {
		setSelectedText2(e.target.value);
	};

	const handleCustomTextChange = (e) => {
		setCustomText(e.target.value);
	};

	const handleGenerateMessage = () => {
		const message = `Act as a ${selectedText1} ${customText} ${selectedText2}`;
		setGeneratedMessage(message);
	};

	return (
		<div className="container mx-auto py-8">
			<div className="flex items-center mb-4">
				<label htmlFor="text1" className="mr-2">
					Predefined Text 1:
				</label>
				<select
					id="text1"
					value={selectedText1}
					onChange={handleText1Change}
					className="px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					<option value="">Select option</option>
					<option value="senior frontend developer">Senior Frontend Developer</option>
					<option value="devops engineer">DevOps Engineer</option>
					<option value="backend engineer">Backend Engineer</option>
				</select>
			</div>

			<div className="flex items-center mb-4">
				<label htmlFor="text2" className="mr-2">
					Predefined Text 2:
				</label>
				<select
					id="text2"
					value={selectedText2}
					onChange={handleText2Change}
					className="px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					<option value="">Select option</option>
					<option value="Vue 3">Vue 3</option>
					<option value="React">React</option>
					<option value="NextJS">NextJS</option>
				</select>
			</div>

			<div className="mb-4">
				<label htmlFor="customText" className="mr-2">
					Custom Text:
				</label>
				<textarea
					id="customText"
					value={customText}
					onChange={handleCustomTextChange}
					className="px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				></textarea>
			</div>

			<button onClick={handleGenerateMessage} className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none">
				Generate Message
			</button>

			{generatedMessage && <div className="mt-4">Generated Message: {generatedMessage}</div>}
		</div>
	);
};

export default PromptForm;
{
	/* <div>
<label
	className="text-white dark:text-gray-200"
	htmlFor="password"
>
	Password
</label>
<input
	id="password"
	type="password"
	className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
/>
</div>
<div>
<label
	className="text-white dark:text-gray-200"
	htmlFor="passwordConfirmation"
>
	Password Confirmation
</label>
<input
	id="passwordConfirmation"
	type="password"
	className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
/>
</div>
<div>
<label
	className="text-white dark:text-gray-200"
	htmlFor="passwordConfirmation"
>
	Color
</label>
<input
	id="color"
	type="color"
	className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
/>
</div>
<div>
<label
	className="text-white dark:text-gray-200"
	htmlFor="passwordConfirmation"
>
	Select
</label>
<select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
	<option>Surabaya</option>
	<option>Jakarta</option>
	<option>Tangerang</option>
	<option>Bandung</option>
</select>
</div>
<div>
<label
	className="text-white dark:text-gray-200"
	htmlFor="passwordConfirmation"
>
	Range
</label>
<input
	id="range"
	type="range"
	className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
/>
</div>
<div>
<label
	className="text-white dark:text-gray-200"
	htmlFor="passwordConfirmation"
>
	Date
</label>
<input
	id="date"
	type="date"
	className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
/>
</div>
<div>
<label
	className="text-white dark:text-gray-200"
	htmlFor="passwordConfirmation"
>
	Text Area
</label>
<textarea
	id="textarea"
	type="textarea"
	className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
	defaultValue={''}
/>
</div>
<div>
<label className="block text-sm font-medium text-white">
	Image
</label>
<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
	<div className="space-y-1 text-center">
		<svg
			className="mx-auto h-12 w-12 text-white"
			stroke="currentColor"
			fill="none"
			viewBox="0 0 48 48"
			aria-hidden="true"
		>
			<path
				d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
		<div className="flex text-sm text-gray-600">
			<label
				htmlFor="file-upload"
				className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
			>
				<span className="">
					Upload a file
				</span>
				<input
					id="file-upload"
					name="file-upload"
					type="file"
					className="sr-only"
				/>
			</label>
			<p className="pl-1 text-white">
				or drag and drop
			</p>
		</div>
		<p className="text-xs text-white">
			PNG, JPG, GIF up to 10MB
		</p>
	</div>
</div>
</div>
</div>
<div className="flex justify-end mt-6">
<button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
Save
</button>
</div>
</form>
</section>
<section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
<h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
Account settings
</h2>
<form>
<div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
<div>
<label
	className="text-gray-700 dark:text-gray-200"
	htmlFor="username"
>
	Username
</label>
<input
	id="username"
	type="text"
	className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
/>
</div>
<div>
<label
	className="text-gray-700 dark:text-gray-200"
	htmlFor="emailAddress"
>
	Email Address
</label>
<input
	id="emailAddress"
	type="email"
	className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
/>
</div>
<div>
<label
	className="text-gray-700 dark:text-gray-200"
	htmlFor="password"
>
	Password
</label>
<input
	id="password"
	type="password"
	className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
/>
</div>
<div>
<label
	className="text-gray-700 dark:text-gray-200"
	htmlFor="passwordConfirmation"
>
	Password Confirmation
</label>
<input
	id="passwordConfirmation"
	type="password"
	className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
/>
</div>
</div>
<div className="flex justify-end mt-6">
<button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
Save
</button> */
}
