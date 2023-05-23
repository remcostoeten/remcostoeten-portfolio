import GradientSphere from './GradientSphere';
import styles from './Landing.module.scss';
import React, { useEffect, useRef } from 'react';

function CircleWithBorder({ isHovered }) {
	const pathRef = useRef();

	useEffect(() => {
		if (pathRef.current) {
			const path = pathRef.current;
			const length = path.getTotalLength();
			path.style.strokeDasharray = length;
			path.style.strokeDashoffset = isHovered ? 0 : length;
			path.getBoundingClientRect();
			path.style.transition = 'stroke-dashoffset 2s ease-in-out';
			path.style.strokeDashoffset = isHovered ? length : 0;
		}
	}, [isHovered]);

	return (
		<div
			className={`${styles.circleWithBorder} flex relative items-center justify-center h-screen -z-1`}
		>
			<GradientSphere
				size="64px"
				top=" 290px"
				left="40%"
				rotate={45}
				horizontalTransform="translateX(-50%)"
			/>
			<GradientSphere
				size="96px"
				top=" 390px"
				left="70%"
				rotate={90}
				horizontalTransform="translateX(-50%)"
			/>
			<svg
				width="750"
				height="1131"
				viewBox="0 0 754 751"
				fill="none"
				className='circel-svg'
				xmlns="http://www.w3.org/2000/svg"
				style={{
					transform: isHovered ? 'rotate(180deg)' : 'rotate(0)',
					transition: 'transform 1s ease-in-out',
				}}
			>
				<circle
					cx="375.5"
					cy="375.5"
					r="375"
					stroke="url(#paint0_linear_1_36)"
				/>
				<path
					d="M700.693 563.25C735.634 502.729 752.994 433.659 750.818 363.809C748.642 293.96 727.018 226.104 688.377 167.875L685.248 169.951C723.503 227.598 744.911 294.775 747.065 363.926C749.219 433.077 732.033 501.457 697.441 561.372L700.693 563.25Z"
					fill="#D9D9D9"
					ref={pathRef}
				/>
				<defs>
					<linearGradient
						id="paint0_linear_1_36"
						x1="751"
						y1="375"
						x2="0"
						y2="375"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="white" />
						<stop
							offset="0.995243"
							stop-color="white"
							stop-opacity="0"
						/>
					</linearGradient>
					<defs>
						<linearGradient
							id="gradient"
							cx="50%"
							cy="50%"
							r="50%"
							fx="50%"
							fy="50%"
						>
							<stop offset="0%" stopColor="#000000" />
							<stop offset="60%" stopColor="#c850c0" />
							<stop offset="100%" stopColor="#ffcc70" />
						</linearGradient>
					</defs>
				</defs>
			</svg>
			<GradientSphere
				size="96px"
				top=" 70%"
				left="70%"
				rotate={90}
				horizontalTransform="translateX(-50%)"
			/>
			<GradientSphere
				size="184px"
				top=" 77%"
				left="35%"
				rotate={33}
				horizontalTransform="translateX(-50%)"
			/>
		</div>
	);
}

export default CircleWithBorder;
