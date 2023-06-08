import Content from '@/components/docs/Content';
import Header from '@/components/docs/Header';
import Sidebar from '@/components/docs/Sidebar';
import React from 'react';

export default function page() {
	return (
		<>
			<Header />
			<div className="flex">
				<Sidebar />
				<Content />
			</div>
		</>
	);
}
