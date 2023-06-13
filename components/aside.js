import React from 'react';

export default function aside() {
	return (
		<nav
			id="nav"
			className="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-14 sticky?lg:h-(screen-18)"
		>
			<div className="relative flex mb-8 px-3 lg:hidden">
				<form className="relative">
					<label>
						<span className="sr-only">Tailwind CSS Version</span>
						<select className="appearance-none block bg-transparent pr-7 py-1 text-gray-500 font-medium text-sm focus:outline-none focus:text-gray-900 transition-colors duration-200">
							<option value="v3">v3</option>
							<option value="v2" selected="">
								v{/* */}2.2.16
							</option>
							<option value="v1">v1.9.6</option>
							<option value="v0">v0.7.4</option>
						</select>
					</label>
					<svg
						className="w-5 h-5 text-gray-400 absolute top-1/2 right-0 -mt-2.5 pointer-events-none"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						/>
					</svg>
				</form>
			</div>
			<ul>
				<li>
					<a
						href="/docs"
						className="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 mb-4 text-gray-900"
					>
						<div className="mr-3 rounded-md bg-gradient-to-br from-pink-500 to-rose-500">
							<svg className="h-6 w-6" viewBox="0 0 24 24">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M9 6C10.0929 6 11.1175 6.29218 12 6.80269V16.8027C11.1175 16.2922 10.0929 16 9 16C7.90714 16 6.88252 16.2922 6 16.8027V6.80269C6.88252 6.29218 7.90714 6 9 6Z"
									fill="#FFF1F2"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M15 6C16.0929 6 17.1175 6.29218 18 6.80269V16.8027C17.1175 16.2922 16.0929 16 15 16C13.9071 16 12.8825 16.2922 12 16.8027V6.80269C12.8825 6.29218 13.9071 6 15 6Z"
									fill="#FECDD3"
								/>
							</svg>
						</div>
						Documentation
					</a>
				</li>
				<li>
					<a
						href="https://tailwindui.com/components?utm_source=tailwindcss&utm_medium=navigation"
						className="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 mb-4"
					>
						<div className="mr-3 rounded-md bg-gradient-to-br from-purple-500 to-indigo-500">
							<svg className="h-6 w-6" viewBox="0 0 24 24">
								<path
									d="M6 9l6-3 6 3v6l-6 3-6-3V9z"
									fill="#F5F3FF"
								/>
								<path d="M6 9l6 3v6l-6-3V9z" fill="#DDD6FE" />
								<path d="M18 9l-6 3v6l6-3V9z" fill="#C4B5FD" />
							</svg>
						</div>
						Components
					</a>
				</li>
				<li>
					<a
						href="https://play.tailwindcss.com"
						className="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 mb-4"
					>
						<div className="mr-3 rounded-md bg-gradient-to-br from-yellow-400 to-orange-500">
							<svg className="h-6 w-6" viewBox="0 0 24 24">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M13.196 6.02a1 1 0 01.785 1.176l-2 10a1 1 0 01-1.961-.392l2-10a1 1 0 011.176-.784z"
									fill="#FDE68A"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M15.293 9.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-2 2a1 1 0 01-1.414-1.414L16.586 12l-1.293-1.293a1 1 0 010-1.414zM8.707 9.293a1 1 0 010 1.414L7.414 12l1.293 1.293a1 1 0 11-1.414 1.414l-2-2a1 1 0 010-1.414l2-2a1 1 0 011.414 0z"
									fill="#FDF4FF"
								/>
							</svg>
						</div>
						Playground
					</a>
				</li>
				<li>
					<a
						href="https://blog.tailwindcss.com"
						className="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 mb-4"
					>
						<div className="mr-3 rounded-md bg-gradient-to-br from-green-400 to-cyan-500">
							<svg className="h-6 w-6" viewBox="0 0 24 24">
								<path
									d="M8 9a1 1 0 011-1h8a1 1 0 011 1v7.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 018 16.5V9z"
									fill="#6EE7B7"
								/>
								<path
									d="M15 7a1 1 0 00-1-1H7a1 1 0 00-1 1v9.5A1.5 1.5 0 007.5 18H16v-.085a1.5 1.5 0 01-1-1.415V7z"
									fill="#ECFDF5"
								/>
								<path
									fill="#A7F3D0"
									d="M8 8h5v4H8zM8 14h5v2H8z"
								/>
							</svg>
						</div>
						News
					</a>
				</li>
				<li>
					<a
						href="/resources"
						className="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 mb-4"
					>
						<div className="mr-3 rounded-md bg-gradient-to-br from-light-blue-400 to-indigo-500">
							<svg className="h-6 w-6" viewBox="0 0 24 24">
								<path
									d="M17 13a1 1 0 011 1v3a1 1 0 01-1 1H8.5a2.5 2.5 0 010-5H17z"
									fill="#93C5FD"
								/>
								<path
									d="M12.743 7.722a1 1 0 011.414 0l2.122 2.121a1 1 0 010 1.414l-6.01 6.01a2.5 2.5 0 11-3.536-3.536l6.01-6.01z"
									fill="#BFDBFE"
								/>
								<path
									d="M6 7a1 1 0 011-1h3a1 1 0 011 1v8.5a2.5 2.5 0 01-5 0V7z"
									fill="#EFF6FF"
								/>
								<path
									d="M9.5 15.5a1 1 0 11-2 0 1 1 0 012 0z"
									fill="#60A5FA"
								/>
							</svg>
						</div>
						Resources
					</a>
				</li>
				<li>
					<a
						href="https://www.youtube.com/tailwindlabs"
						className="flex items-center px-3 hover:text-gray-900 transition-colors duration-200 mb-10"
					>
						<div className="mr-3 rounded-md bg-gradient-to-br from-fuchsia-500 to-purple-600">
							<svg className="h-6 w-6" viewBox="0 0 24 24">
								<circle cx={12} cy={12} r={7} fill="#F3E8FF" />
								<path
									d="M14.52 11.136a1 1 0 010 1.728l-3.016 1.759A1 1 0 0110 13.759v-3.518a1 1 0 011.504-.864l3.015 1.76z"
									fill="#C084FC"
								/>
							</svg>
						</div>
						Screencasts
					</a>
				</li>
				<li className="mt-8">
					<h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
						Getting started
					</h5>
					<ul>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/installation"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Installation</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="https://github.com/tailwindlabs/tailwindcss/releases"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Release Notes</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/upgrading-to-v2"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Upgrade Guide</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/editor-support"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Editor Support</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/using-with-preprocessors"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Using with Preprocessors
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/optimizing-for-production"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Optimizing for Production
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/browser-support"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Browser Support
								</span>
							</a>
						</li>
					</ul>
				</li>
				<li className="mt-8">
					<h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
						Core Concepts
					</h5>
					<ul>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/utility-first"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Utility-First</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/responsive-design"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Responsive Design
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/hover-focus-and-other-states"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Hover, Focus, &amp; Other States
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/dark-mode"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Dark Mode</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/adding-base-styles"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Adding Base Styles
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/extracting-components"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Extracting Components
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/adding-new-utilities"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Adding New Utilities
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/functions-and-directives"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Functions &amp; Directives
								</span>
							</a>
						</li>
					</ul>
				</li>
				<li className="mt-8">
					<h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
						Customization
					</h5>
					<ul>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/configuration"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Configuration</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/just-in-time-mode"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Just-in-Time Mode
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/theme"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Theme</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/breakpoints"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Breakpoints</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/customizing-colors"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Colors</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/customizing-spacing"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Spacing</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/configuring-variants"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Variants</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/plugins"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Plugins</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/presets"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Presets</span>
							</a>
						</li>
					</ul>
				</li>
				<li className="mt-8">
					<h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
						Base Styles
					</h5>
					<ul>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/preflight"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Preflight</span>
							</a>
						</li>
					</ul>
				</li>
				<li className="mt-8">
					<h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
						Layout
					</h5>
					<ul>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/container"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Container</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/box-decoration-break"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Box Decoration Break
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/box-sizing"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Box Sizing</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/display"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Display</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/float"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Floats</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/clear"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Clear</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/isolation"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Isolation</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/object-fit"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Object Fit</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/object-position"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Object Position
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/overflow"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Overflow</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/overscroll-behavior"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Overscroll Behavior
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/position"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Position</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/top-right-bottom-left"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Top / Right / Bottom / Left
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/visibility"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Visibility</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/z-index"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Z-Index</span>
							</a>
						</li>
					</ul>
				</li>
				<li className="mt-8">
					<h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
						Flexbox and Grid
					</h5>
					<ul>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/flex-direction"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Flex Direction</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/flex-wrap"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Flex Wrap</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/flex"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Flex</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/flex-grow"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Flex Grow</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/flex-shrink"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Flex Shrink</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/order"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Order</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/grid-template-columns"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Grid Template Columns
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/grid-column"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Grid Column Start / End
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/grid-template-rows"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Grid Template Rows
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/grid-row"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Grid Row Start / End
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/grid-auto-flow"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Grid Auto Flow</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/grid-auto-columns"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Grid Auto Columns
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/grid-auto-rows"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Grid Auto Rows</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/gap"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Gap</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/justify-content"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Justify Content
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/justify-items"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Justify Items</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/justify-self"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Justify Self</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/align-content"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Align Content</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/align-items"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Align Items</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/align-self"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Align Self</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/place-content"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Place Content</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/place-items"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Place Items</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/place-self"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Place Self</span>
							</a>
						</li>
					</ul>
				</li>
				<li className="mt-8">
					<h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
						Spacing
					</h5>
					<ul>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/padding"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Padding</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/margin"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Margin</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/space"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Space Between</span>
							</a>
						</li>
					</ul>
				</li>
				<li className="mt-8">
					<h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
						Sizing
					</h5>
					<ul>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/width"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Width</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/min-width"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Min-Width</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/max-width"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Max-Width</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/height"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Height</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/min-height"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Min-Height</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/max-height"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Max-Height</span>
							</a>
						</li>
					</ul>
				</li>
				<li className="mt-8">
					<h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
						Typography
					</h5>
					<ul>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/font-family"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Font Family</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/font-size"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Font Size</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/font-smoothing"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Font Smoothing</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/font-style"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Font Style</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/font-weight"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Font Weight</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/font-variant-numeric"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Font Variant Numeric
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/letter-spacing"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Letter Spacing</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/line-height"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Line Height</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/list-style-type"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									List Style Type
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/list-style-position"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									List Style Position
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/placeholder-color"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Placeholder Color
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/placeholder-opacity"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Placeholder Opacity
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/text-align"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Text Align</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/text-color"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Text Color</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/text-opacity"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Text Opacity</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/text-decoration"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Text Decoration
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/text-transform"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Text Transform</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/text-overflow"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Text Overflow</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/vertical-align"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Vertical Align</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/whitespace"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Whitespace</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/word-break"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Word Break</span>
							</a>
						</li>
					</ul>
				</li>
				<li className="mt-8">
					<h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
						Backgrounds
					</h5>
					<ul>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/background-attachment"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Background Attachment
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/background-clip"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Background Clip
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/background-color"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Background Color
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/background-opacity"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Background Opacity
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/background-origin"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Background Origin
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/background-position"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Background Position
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/background-repeat"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Background Repeat
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/background-size"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Background Size
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/background-image"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Background Image
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/gradient-color-stops"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Gradient Color Stops
								</span>
							</a>
						</li>
					</ul>
				</li>
				<li className="mt-8">
					<h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
						Borders
					</h5>
					<ul>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/border-radius"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Border Radius</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/border-width"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Border Width</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/border-color"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Border Color</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/border-opacity"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Border Opacity</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/border-style"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Border Style</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/divide-width"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Divide Width</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/divide-color"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Divide Color</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/divide-opacity"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Divide Opacity</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/divide-style"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Divide Style</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/ring-width"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Ring Width</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/ring-color"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Ring Color</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/ring-opacity"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Ring Opacity</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/ring-offset-width"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Ring Offset Width
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/ring-offset-color"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Ring Offset Color
								</span>
							</a>
						</li>
					</ul>
				</li>
				<li className="mt-8">
					<h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
						Effects
					</h5>
					<ul>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/box-shadow"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Box Shadow</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/opacity"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Opacity</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/mix-blend-mode"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Mix Blend Mode</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/background-blend-mode"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Background Blend Mode
								</span>
							</a>
						</li>
					</ul>
				</li>
				<li className="mt-8">
					<h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
						Filters
					</h5>
					<ul>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/filter"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Filter</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/blur"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Blur</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/brightness"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Brightness</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/contrast"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Contrast</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/drop-shadow"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Drop Shadow</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/grayscale"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Grayscale</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/hue-rotate"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Hue Rotate</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/invert"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Invert</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/saturate"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Saturate</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/sepia"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Sepia</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/backdrop-filter"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Backdrop Filter
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/backdrop-blur"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Backdrop Blur</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/backdrop-brightness"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Backdrop Brightness
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/backdrop-contrast"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Backdrop Contrast
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/backdrop-grayscale"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Backdrop Grayscale
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/backdrop-hue-rotate"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Backdrop Hue Rotate
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/backdrop-invert"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Backdrop Invert
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/backdrop-opacity"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Backdrop Opacity
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/backdrop-saturate"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Backdrop Saturate
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/backdrop-sepia"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Backdrop Sepia</span>
							</a>
						</li>
					</ul>
				</li>
				<li className="mt-8">
					<h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
						Tables
					</h5>
					<ul>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/border-collapse"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Border Collapse
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/table-layout"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Table Layout</span>
							</a>
						</li>
					</ul>
				</li>
				<li className="mt-8">
					<h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
						Transitions and Animation
					</h5>
					<ul>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/transition-property"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Transition Property
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/transition-duration"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Transition Duration
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/transition-timing-function"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Transition Timing Function
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/transition-delay"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Transition Delay
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/animation"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Animation</span>
							</a>
						</li>
					</ul>
				</li>
				<li className="mt-8">
					<h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
						Transforms
					</h5>
					<ul>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/transform"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Transform</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/transform-origin"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">
									Transform Origin
								</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/scale"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Scale</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/rotate"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Rotate</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/translate"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Translate</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/skew"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Skew</span>
							</a>
						</li>
					</ul>
				</li>
				<li className="mt-8">
					<h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
						Interactivity
					</h5>
					<ul>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/appearance"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Appearance</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/cursor"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Cursor</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/outline"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Outline</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/pointer-events"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Pointer Events</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/resize"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Resize</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/user-select"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">User Select</span>
							</a>
						</li>
					</ul>
				</li>
				<li className="mt-8">
					<h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
						SVG
					</h5>
					<ul>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/fill"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Fill</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/stroke"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Stroke</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/stroke-width"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Stroke Width</span>
							</a>
						</li>
					</ul>
				</li>
				<li className="mt-8">
					<h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
						Accessibility
					</h5>
					<ul>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="/docs/screen-readers"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Screen Readers</span>
							</a>
						</li>
					</ul>
				</li>
				<li className="mt-8">
					<h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
						Official Plugins
					</h5>
					<ul>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="https://github.com/tailwindlabs/tailwindcss-typography"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Typography</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="https://github.com/tailwindlabs/tailwindcss-forms"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Forms</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="https://github.com/tailwindlabs/tailwindcss-aspect-ratio"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Aspect Ratio</span>
							</a>
						</li>
						<li>
							<a
								className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
								href="https://github.com/tailwindlabs/tailwindcss-line-clamp"
							>
								<span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0" />
								<span className="relative">Line Clamp</span>
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
}
