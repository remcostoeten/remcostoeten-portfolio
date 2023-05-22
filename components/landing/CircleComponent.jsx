import { useState, useEffect, useRef } from 'react';
import styles from './Landing.module.scss';

function CircleWithBorder({ isHovered }) {
  const [circleLength, setCircleLength] = useState(0);
  const borderRef = useRef(null);

  useEffect(() => {
    if (borderRef.current) {
      const animation = setInterval(() => {
        if (borderRef.current.style.strokeDashoffset > 0) {
          borderRef.current.style.strokeDashoffset -= 1;
        }
      }, 10);

      return () => clearInterval(animation);
    }
  }, [borderRef]);

  return (
    <div className={`${styles.circleWithBorder} flex items-center justify-center h-screen`}>

	   <svg
        width="754"
        height="751"
        viewBox="0 0 754 751"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: isHovered ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 1s ease-in-out' }}
      >
				<circle
					cx="375.5"
					ref={borderRef}
					cy="375.5"
					r="375"
					stroke="url(#paint0_linear_1_36)"
				/>
				<path
					d="M700.693 563.25C735.634 502.729 752.994 433.659 750.818 363.809C748.642 293.96 727.018 226.104 688.377 167.875L685.248 169.951C723.503 227.598 744.911 294.775 747.065 363.926C749.219 433.077 732.033 501.457 697.441 561.372L700.693 563.25Z"
					fill="#D9D9D9"
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
		</div>
	);
}

export default CircleWithBorder;
