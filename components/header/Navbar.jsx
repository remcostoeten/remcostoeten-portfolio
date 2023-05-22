import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar({ handleHover }) {
  const router = useRouter();

  const isActive = (pathname) => {
    return router.pathname === pathname;
  };

  return (
    <>
      <nav className="absolute">
        <ul className="flex flex-col">
          <li
            className="animate__animated animate__zoomInRight animate__delay-1s"
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
            <Link href="/" className={isActive('/') ? 'active' : ''}>
              Home
            </Link>
			
          </li>
		  <li
            className="animate__animated animate__zoomInRight animate__delay-1s"
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
            <Link href="/" className={isActive('/') ? 'active' : ''}>
              Work
            </Link>
			
          </li>
		  <li
            className="animate__animated animate__zoomInRight animate__delay-1s"
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
            <Link href="/" className={isActive('/') ? 'active' : ''}>
              Contact
            </Link>
			
          </li>
          {/* Add similar onMouseEnter and onMouseLeave events to other li elements */}
          {/* The rest of your code */}
        </ul>
      </nav>
    </>
  );
}
