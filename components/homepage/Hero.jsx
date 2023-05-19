import Ball from 'components/Ball';
import Header from 'components/header/Header';
import React, { useState } from 'react';

export default function Hero() {
	return (
		<>
			<div className="rounded-3xl hero m-10 pl-12 pt-6 pb-6 pr-12 bg-slate-100 h-screen">
				<Header />
				<div className="relative h-screen w-screen">
					<div className="grow w-32 h-32 bg-blue-500"></div>
				</div>
			</div>
		</>
	);
}
