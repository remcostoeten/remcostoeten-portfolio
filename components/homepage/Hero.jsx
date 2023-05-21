import React from 'react';
import Image from 'next/image';
import Header from 'components/header/Header';
import MouseFollower from 'components/MouseFollower';

const Hero = () => {
	return (
		<>
			<div className="custom-height rounded-xl my-10  mx-12 md:pl-24 md:pr-24 pt-8 pb-12 bg-heroBg relative">
				<div>
					<Header />
					<div className="l-2.5 pt-44 font-poppins font-bold text-4xl leading-8 text-white text-shadow">
						Olah! Remco here. <br />
						I'm a{' '}
						<span className="animate bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">
							Frontend Developer
						</span>{' '}
						<br />
						based in
						<span className="bg-gradient-to-r from-violet-500 to-pink-500 text-transparent bg-clip-text">
							the Netherlands
						</span>
						.
					</div>
				</div>
				{/* <CubeImage /> */}
				{/* <div className="phone grow "></div> */}
				<div className="bigBlur -z-1 absolute -top-1/4"></div>
			</div>
			<div className="bottom bg-black w-full h-4">
				<div className="donut -z-1 absolute right-0 bottom-0">
					<div className="smallBlur"></div>
				</div>
			</div>
		</>
	);
};

const CubeImage = () => {
	return (
		<>
			<div
				className="absolute left-1/2 transform -translate-x-1/2 top-118"
				style={{
					width: '49px',
					height: '42px',
					left: '75%',
				}}
			>
				<Image
					src="/hero/cube.png"
					alt="Cube"
					className="grow"
					layout="fill"
					objectFit="cover"
				/>
			</div>
			{/* <div className="smallBlur">	</div> */}
		</>
	);
};
export default Hero;
