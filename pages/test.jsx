import MouseFollower from 'components/MouseFollower';
import React from 'react';

export default function test() {
	return (
		<>
			<MouseFollower />
			<div className="grid place-items-center h-screen">
				{' '}
				<div className="rounded-3xl  my-10  mx-12 md:pl-24 md:pr-24 pt-8 pb-12 bg-heroBg relative">
					{' '}
					<h1 className="h1  grow">Test 123</h1>
					<p className="mt-44">!LightModeSharpdawdddddddddddddd</p>
					<div className="pl-2.5 pt-44 font-poppins font-bold text-4xl leading-8 text-white text-shadow">
						Olah! Remco here. <br />
						I'm a{' '}
						<span className="animate bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">
							Frontend Developer
						</span>{' '}
						<br />
						based in
						<span className="grow bg-gradient-to-r from-violet-500 to-pink-500 text-transparent bg-clip-text">
							the Netherlands
						</span>
						.
					</div>
				</div>
			</div>
		</>
	);
}
