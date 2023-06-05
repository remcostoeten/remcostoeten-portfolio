'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function MessageGenerator() {
	const [role, setRole] = useState('');
	const [message, setMessage] = useState('');
	const [tech, setTech] = useState('');
	const [output, setOutput] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setOutput(`Act as a ${role}, my own message ${message} ${tech}`);
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<form onSubmit={handleSubmit} className="space-y-4">
				<select
					onChange={(e) => setRole(e.target.value)}
					className="border-2 p-2"
				>
					<option value="">-- select role --</option>
					<option value="Senior Frontend Developer">
						Senior Frontend Developer
					</option>
					<option value="DevOps Engineer">DevOps Engineer</option>
					<option value="Backend Engineer">Backend Engineer</option>
				</select>

				<input
					type="text"
					onChange={(e) => setMessage(e.target.value)}
					placeholder="Your custom message..."
					className="border-2 p-2"
				/>

				<select
					onChange={(e) => setTech(e.target.value)}
					className="border-2 p-2"
				>
					<option value="">-- select tech --</option>
					<option value="Vue 3">Vue 3</option>
					<option value="React">React</option>
					<option value="NextJS">NextJS</option>
				</select>

				<button type="submit" className="p-2 bg-blue-500 text-white">
					Generate
				</button>
			</form>

			{output && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="mt-6 text-lg text-gray-700"
				>
					{output}
				</motion.div>
			)}
		</div>
	);
}
