// supabase docs content
import React from 'react';

export default function Content() {
	return (
		<>
			<div className="grow">
				<div className="max-w-7xl px-5 mx-auto py-16 pb-0">
					<div className="grid grid-cols-12 relative gap-4">
						<div className="relative col-span-12 md:col-span-9 transition-all ease-out duration-100">
							<article className=" prose dark:prose-dark max-w-none">
								<h1 className="mb-0">Database</h1>
								<div className="w-full h-[1px] bg-scale-500 my-8" />
								<p>
									Every Supabase project comes with a full <a href="https://www.postgresql.org/">Postgres</a> database, a
									free and open source database which is considered one of the world's most stable and advanced databases.
								</p>
								<h2 id="postgres-or-postgresql" className="group scroll-mt-24">
									Postgres or PostgreSQL?
									<a href="#postgres-or-postgresql" className="ml-2 opacity-0 group-hover:opacity-100 transition">
										#
									</a>
								</h2>
								<p>
									PostgreSQL the database was derived from the POSTGRES Project, a package written at the University of
									California at Berkeley in 1986. This package included a query language called "PostQUEL".
								</p>
								<p>
									In 1994, Postgres95 was built on top of POSTGRES code, adding an SQL language interpreter as a
									replacement for PostQUEL. Eventually, Postgres95 was renamed to PostgreSQL to reflect the SQL query
									capability.
								</p>
								<p>
									After this, many people referred to it as Postgres since it's less prone to confusion. Supabase is all
									about simplicity, so we also refer to it as Postgres.
								</p>
								<h2 id="features" className="group scroll-mt-24">
									Features
									<a href="#features" className="ml-2 opacity-0 group-hover:opacity-100 transition">
										#
									</a>
								</h2>
								<h3 id="table-view" className="group scroll-mt-24">
									Table View
									<a href="#table-view" className="ml-2 opacity-0 group-hover:opacity-100 transition">
										#
									</a>
								</h3>
								<p>
									You don't have to be a database expert to start using Supabase. Our table view makes Postgres as easy to
									use as a spreadsheet.
								</p>
								<p>
									<span className="next-image--dynamic-fill">
										<span
											style={{
												boxSizing: 'border-box',
												display: 'block',
												overflow: 'hidden',
												width: 'initial',
												height: 'initial',
												background: 'none',
												opacity: 1,
												border: '0px',
												margin: '0px',
												padding: '0px',
												position: 'absolute',
												inset: '0px',
											}}
										>
											<img
												alt="Table View."
												src="/docs/_next/image?url=%2Fdocs%2Fimg%2Ftable-view.png&w=3840&q=75"
												decoding="async"
												data-nimg="fill"
												className="rounded-md border"
												style={{
													position: 'absolute',
													inset: '0px',
													boxSizing: 'border-box',
													padding: '0px',
													border: 'none',
													margin: 'auto',
													display: 'block',
													width: '0px',
													height: '0px',
													minWidth: '100%',
													maxWidth: '100%',
													minHeight: '100%',
													maxHeight: '100%',
												}}
												sizes="100vw"
												srcSet="/docs/_next/image?url=%2Fdocs%2Fimg%2Ftable-view.png&w=640&q=75 640w, /docs/_next/image?url=%2Fdocs%2Fimg%2Ftable-view.png&w=750&q=75 750w, /docs/_next/image?url=%2Fdocs%2Fimg%2Ftable-view.png&w=828&q=75 828w, /docs/_next/image?url=%2Fdocs%2Fimg%2Ftable-view.png&w=1080&q=75 1080w, /docs/_next/image?url=%2Fdocs%2Fimg%2Ftable-view.png&w=1200&q=75 1200w, /docs/_next/image?url=%2Fdocs%2Fimg%2Ftable-view.png&w=1920&q=75 1920w, /docs/_next/image?url=%2Fdocs%2Fimg%2Ftable-view.png&w=2048&q=75 2048w, /docs/_next/image?url=%2Fdocs%2Fimg%2Ftable-view.png&w=3840&q=75 3840w"
											/>
											<noscript />
										</span>
									</span>
								</p>
								<h3 id="relationships" className="group scroll-mt-24">
									Relationships
									<a href="#relationships" className="ml-2 opacity-0 group-hover:opacity-100 transition">
										#
									</a>
								</h3>
								<p>Dig into the relationships within your data.</p>
								<video width="99%" loop playsInline controls>
									<source
										src="https://xguihxuzqibwxjnimxev.supabase.co/storage/v1/object/public/videos/docs/relational-drilldown-zoom.mp4"
										type="video/mp4"
									/>
								</video>
								<h3 id="clone-tables" className="group scroll-mt-24">
									Clone tables
									<a href="#clone-tables" className="ml-2 opacity-0 group-hover:opacity-100 transition">
										#
									</a>
								</h3>
								<p>You can duplicate your tables, just like you would inside a spreadsheet.</p>
								<video width="99%" playsInline controls>
									<source
										src="https://xguihxuzqibwxjnimxev.supabase.co/storage/v1/object/public/videos/docs/duplicate-tables.mp4"
										type="video/mp4"
									/>
								</video>
								<h3 id="the-sql-editor" className="group scroll-mt-24">
									The SQL Editor
									<a href="#the-sql-editor" className="ml-2 opacity-0 group-hover:opacity-100 transition">
										#
									</a>
								</h3>
								<p>Supabase comes with a SQL Editor. You can also save your favorite queries to run later!</p>
								<video width="99%" playsInline controls>
									<source
										src="https://xguihxuzqibwxjnimxev.supabase.co/storage/v1/object/public/videos/docs/favorites.mp4"
										type="video/mp4"
									/>
								</video>
								<h3 id="additional-features" className="group scroll-mt-24">
									Additional features
									<a href="#additional-features" className="ml-2 opacity-0 group-hover:opacity-100 transition">
										#
									</a>
								</h3>
								<ul>
									<li>
										Supabase extends Postgres with realtime functionality using our{' '}
										<a href="https://github.com/supabase/realtime">Realtime Server</a>.
									</li>
									<li>
										Every project is a full Postgres database, with{' '}
										<code className="short-inline-codeblock">postgres</code> level access.
									</li>
									<li>Supabase manages your database backups.</li>
									<li>Import data directly from a CSV or excel spreadsheet.</li>
								</ul>
								<div className="shadow p-4 rounded border-l-[5px] space-y-2 my-4 bg-scale-400 border-scale-800">
									<div className="flex items-center space-x-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={18}
											height={18}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="sbui-icon text-scale-1200"
										>
											<circle cx={12} cy={12} r={10} />
											<line x1={12} y1={16} x2={12} y2={12} />
											<line x1={12} y1={8} x2="12.01" y2={8} />
										</svg>
										<p className="text-sm text-scale-1200 uppercase my-0 font-bold">note</p>
									</div>
									<div className="admonition-content text-scale-1200 text-base space-y-1">
										<p>
											Database backups <strong>do not</strong> include objects stored via the Storage API, as the
											database only includes metadata about these objects. Restoring an old backup does not restore
											objects that have been deleted since then.
										</p>
									</div>
								</div>
								<h3 id="extensions" className="group scroll-mt-24">
									Extensions
									<a href="#extensions" className="ml-2 opacity-0 group-hover:opacity-100 transition">
										#
									</a>
								</h3>
								<p>
									To expand the functionality of your Postgres database, you can use extensions. You can enable Postgres
									extensions with the click of a button within the Supabase dashboard.
								</p>
								<video width="99%" playsInline controls>
									<source
										src="https://xguihxuzqibwxjnimxev.supabase.co/storage/v1/object/public/videos/docs/toggle-extensions.mp4"
										type="video/mp4"
									/>
								</video>
								<p>
									<a href="/docs/guides/database/extensions">Learn more</a> about all the extensions provided on Supabase.
								</p>
								<h2 id="tips" className="group scroll-mt-24">
									Tips
									<a href="#tips" className="ml-2 opacity-0 group-hover:opacity-100 transition">
										#
									</a>
								</h2>
								<p>
									Read about resetting your database password <a href="/docs/guides/database/managing-passwords">here</a>{' '}
									and changing the timezone of your server <a href="/docs/guides/database/managing-timezones">here</a>.
								</p>
								<h2 id="next-steps" className="group scroll-mt-24">
									Next steps
									<a href="#next-steps" className="ml-2 opacity-0 group-hover:opacity-100 transition">
										#
									</a>
								</h2>
								<ul>
									<li>
										Read more about <a href="https://www.postgresql.org/about/">Postgres</a>
									</li>
									<li>
										Sign in: <a href="https://app.supabase.com">app.supabase.com</a>
									</li>
								</ul>
								<div className="mt-16 not-prose">
									<div>
										<a
											href="https://github.com/supabase/supabase/edit/master/apps/docs/pages/guides/database.mdx"
											className="text-sm transition flex items-center gap-1 text-scale-1000 hover:text-scale-1200"
										>
											Edit this page on GitHub{' '}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width={14}
												height={14}
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="sbui-icon "
											>
												<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
												<polyline points="15 3 21 3 21 9" />
												<line x1={10} y1={14} x2={21} y2={3} />
											</svg>
										</a>
									</div>
								</div>
							</article>
						</div>
						<div className="col-span-3 border-scale-400 dark:bg-scale-200 table-of-contents-height thin-scrollbar overflow-y-auto sticky hidden md:block md:col-span-3 px-2 transition-all ease-out duration-100">
							<div className="border-l">
								<span className="block font-mono text-xs uppercase text-scale-1200 px-5 mb-6">On this page</span>
								<ul className="toc-menu list-none pl-5 text-[0.8rem] grid gap-2">
									<li className>
										<a
											href="#postgres-or-postgresql"
											className="text-scale-1000 hover:text-brand-900 transition-colors"
										>
											Postgres or PostgreSQL?
										</a>
									</li>
									<li className>
										<a href="#features" className="text-scale-1000 hover:text-brand-900 transition-colors">
											Features
										</a>
									</li>
									<li className="ml-4">
										<a href="#table-view" className="text-scale-1000 hover:text-brand-900 transition-colors">
											Table View
										</a>
									</li>
									<li className="ml-4">
										<a href="#relationships" className="text-scale-1000 hover:text-brand-900 transition-colors">
											Relationships
										</a>
									</li>
									<li className="ml-4">
										<a href="#clone-tables" className="text-scale-1000 hover:text-brand-900 transition-colors">
											Clone tables
										</a>
									</li>
									<li className="ml-4">
										<a href="#the-sql-editor" className="text-scale-1000 hover:text-brand-900 transition-colors">
											The SQL Editor
										</a>
									</li>
									<li className="ml-4">
										<a href="#additional-features" className="text-scale-1000 hover:text-brand-900 transition-colors">
											Additional features
										</a>
									</li>
									<li className="ml-4">
										<a href="#extensions" className="text-scale-1000 hover:text-brand-900 transition-colors">
											Extensions
										</a>
									</li>
									<li className>
										<a href="#tips" className="text-scale-1000 hover:text-brand-900 transition-colors">
											Tips
										</a>
									</li>
									<li className>
										<a href="#next-steps" className="text-scale-1000 hover:text-brand-900 transition-colors">
											Next steps
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="max-w-7xl px-5 mx-auto py-16 pt-0">
					<div className="mt-16">
						<ul className="flex flex-col gap-2">
							<li className="flex items-center gap-1 text-xs text-scale-900">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={16}
									height={16}
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="sbui-icon "
								>
									<circle cx={12} cy={12} r={10} />
									<circle cx={12} cy={12} r={4} />
									<line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
									<line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
									<line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
									<line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
									<line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
								</svg>
								<p>Need some help?</p>
								<a
									className="text-brand-900 hover:underline"
									target="_blank"
									rel="noreferrer noopener"
									href="https://app.supabase.com/support/new"
								>
									Contact support
								</a>
							</li>
							<li className="flex items-center gap-1 text-xs text-scale-900">
								<svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M12.9521 10.5073C12.766 10.3212 12.5289 10.1943 12.2708 10.1427L10.6794 9.82467C9.80719 9.65024 8.90169 9.77152 8.10609 10.1693L7.89409 10.2747C7.0985 10.6725 6.193 10.7938 5.32076 10.6193L4.03343 10.362C3.81823 10.319 3.59574 10.3298 3.38571 10.3934C3.17569 10.457 2.9846 10.5715 2.82943 10.7267M5.33343 2.88867H10.6668L10.0001 3.55534V7.00334C10.0002 7.35693 10.1407 7.69602 10.3908 7.94601L13.7241 11.2793C14.5641 12.1193 13.9688 13.5553 12.7808 13.5553H3.21876C2.03076 13.5553 1.43609 12.1193 2.27609 11.2793L5.60943 7.94601C5.85949 7.69602 6.00002 7.35693 6.00009 7.00334V3.55534L5.33343 2.88867Z"
										stroke="var(--colors-scale9)"
										strokeWidth="0.7"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<p>Lastest product updates?</p>
								<a
									className="text-brand-900 hover:underline"
									target="_blank"
									rel="noreferrer noopener"
									href="https://supabase.com/changelog"
								>
									See Changelog
								</a>
							</li>
							<li className="flex items-center gap-1 text-xs text-scale-900">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={16}
									height={16}
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="sbui-icon "
								>
									<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
									<polyline points="22 4 12 14.01 9 11.01" />
								</svg>
								<p>Something's not right?</p>
								<a
									className="text-brand-900 hover:underline"
									target="_blank"
									rel="noreferrer noopener"
									href="https://status.supabase.com/"
								>
									Check system status
								</a>
							</li>
						</ul>
					</div>
					<hr className="border-scale-400 my-6" />
					<div className="flex gap-4 items-center justify-between">
						<div className="flex flex-col lg:flex-row gap-3 ">
							<a className="text-xs text-scale-900" href="https://supabase.com/">
								© Supabase Inc
							</a>
							<span className="text-xs text-scale-900">—</span>
							<a className="text-xs text-scale-800 hover:underline" href="/docs/handbook/contributing">
								Contributing
							</a>
							<a
								className="text-xs text-scale-800 hover:underline"
								href="https://github.com/supabase/supabase/blob/master/DEVELOPERS.md"
							>
								Author Styleguide
							</a>
							<a className="text-xs text-scale-800 hover:underline" href="https://supabase.com/open-source">
								Open Source
							</a>
							<a className="text-xs text-scale-800 hover:underline" href="https://supabase.com/supasquad">
								SupaSquad
							</a>
						</div>
						<div className="flex items-center gap-2">
							<a
								href="https://github.com/supabase/supabase"
								target="_blank"
								rel="noreferrer noopener"
								className=" relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1   text-scale-1200 hover:bg-scale-500 shadow-none focus-visible:outline-scale-700  text-xs px-2.5 py-1"
							>
								<span className="truncate">
									<svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M8.66832 1.55469C4.98649 1.55469 2.00195 4.54402 2.00195 8.23269C2.00195 11.1827 3.91187 13.686 6.56108 14.5687C6.8944 14.63 7.01573 14.424 7.01573 14.2467C7.01573 14.0887 7.0104 13.668 7.00706 13.1114C5.15248 13.5147 4.76116 12.216 4.76116 12.216C4.45851 11.444 4.0212 11.2387 4.0212 11.2387C3.41589 10.8254 4.06719 10.8334 4.06719 10.8334C4.73583 10.88 5.08782 11.5214 5.08782 11.5214C5.68246 12.5414 6.64841 12.2467 7.02773 12.076C7.08906 11.6447 7.26105 11.3507 7.45171 11.184C5.97178 11.0154 4.41518 10.442 4.41518 7.88335C4.41518 7.15469 4.67517 6.55802 5.10115 6.09135C5.03248 5.92269 4.80383 5.24335 5.16648 4.32469C5.16648 4.32469 5.72645 4.14469 6.99973 5.00869C7.54355 4.86036 8.10464 4.78482 8.66832 4.78402C9.23496 4.78669 9.80494 4.86069 10.3376 5.00869C11.6102 4.14469 12.1688 4.32402 12.1688 4.32402C12.5328 5.24335 12.3035 5.92269 12.2355 6.09135C12.6621 6.55802 12.9208 7.15469 12.9208 7.88335C12.9208 10.4487 11.3615 11.0134 9.87694 11.1787C10.1163 11.3847 10.3289 11.792 10.3289 12.4154C10.3289 13.3074 10.3209 14.028 10.3209 14.2467C10.3209 14.4254 10.4409 14.6334 10.7796 14.568C12.107 14.1228 13.261 13.2716 14.0784 12.1347C14.8958 10.9979 15.3353 9.6329 15.3347 8.23269C15.3347 4.54402 12.3495 1.55469 8.66832 1.55469Z"
											fill="var(--colors-scale9)"
										/>
									</svg>
								</span>
							</a>
							<a
								href="https://youtube.com/c/supabase"
								target="_blank"
								rel="noreferrer noopener"
								className=" relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1   text-scale-1200 hover:bg-scale-500 shadow-none focus-visible:outline-scale-700  text-xs px-2.5 py-1"
							>
								<span className="truncate">
									<svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M15.665 4.35595C15.481 3.66308 14.9388 3.11739 14.2505 2.93221C13.0028 2.5957 7.99964 2.5957 7.99964 2.5957C7.99964 2.5957 2.99655 2.5957 1.74883 2.93221C1.06047 3.11742 0.518326 3.66308 0.334321 4.35595C0 5.61181 0 8.23207 0 8.23207C0 8.23207 0 10.8523 0.334321 12.1082C0.518326 12.8011 1.06047 13.324 1.74883 13.5092C2.99655 13.8457 7.99964 13.8457 7.99964 13.8457C7.99964 13.8457 13.0027 13.8457 14.2505 13.5092C14.9388 13.324 15.481 12.8011 15.665 12.1082C15.9993 10.8523 15.9993 8.23207 15.9993 8.23207C15.9993 8.23207 15.9993 5.61181 15.665 4.35595ZM6.36334 10.6111V5.85307L10.545 8.23212L6.36334 10.6111Z"
											fill="var(--colors-scale9)"
										/>
									</svg>
								</span>
							</a>
							<a
								href="https://twitter.com/supabase"
								target="_blank"
								rel="noreferrer noopener"
								className=" relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1   text-scale-1200 hover:bg-scale-500 shadow-none focus-visible:outline-scale-700  text-xs px-2.5 py-1"
							>
								<span className="truncate">
									<svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M5.52713 13.7223C10.5582 13.7223 13.3101 9.55365 13.3101 5.93898C13.3101 5.82032 13.3101 5.70232 13.3021 5.58565C13.8375 5.198 14.2996 4.71806 14.6667 4.16832C14.1675 4.38965 13.6378 4.53483 13.0955 4.59898C13.6665 4.25702 14.0939 3.71922 14.2981 3.08565C13.7612 3.40424 13.1739 3.6288 12.5615 3.74965C12.1491 3.31083 11.6035 3.02021 11.0093 2.92279C10.4151 2.82537 9.80528 2.92658 9.27438 3.21076C8.74347 3.49494 8.32106 3.94623 8.07255 4.49476C7.82403 5.04328 7.76328 5.65844 7.89969 6.24498C6.81213 6.19048 5.74819 5.90787 4.77693 5.4155C3.80567 4.92313 2.9488 4.232 2.26194 3.38698C1.91217 3.98912 1.80502 4.70193 1.96231 5.38029C2.1196 6.05866 2.52951 6.65157 3.10857 7.03832C2.67343 7.02572 2.2477 6.90865 1.86729 6.69698V6.73165C1.86755 7.36318 2.08621 7.97519 2.4862 8.46389C2.88618 8.95259 3.44287 9.28791 4.06186 9.41298C3.65909 9.52279 3.2365 9.53876 2.82658 9.45965C3.00135 10.0033 3.34168 10.4787 3.79996 10.8194C4.25824 11.1601 4.81154 11.349 5.38247 11.3597C4.81524 11.8054 4.16572 12.1349 3.47104 12.3293C2.77636 12.5238 2.05017 12.5794 1.33398 12.493C2.585 13.2959 4.04066 13.7217 5.52713 13.7197"
											fill="var(--colors-scale9)"
										/>
									</svg>
								</span>
							</a>
							<a
								href="https://discord.supabase.com/"
								target="_blank"
								rel="noreferrer noopener"
								className=" relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1   text-scale-1200 hover:bg-scale-500 shadow-none focus-visible:outline-scale-700  text-xs px-2.5 py-1"
							>
								<span className="truncate">
									<svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0_1182_99731)">
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M13.8781 3.13594C12.8583 2.66802 11.7648 2.32328 10.6215 2.12583C10.6006 2.12202 10.5798 2.13154 10.5691 2.15059C10.4285 2.40073 10.2727 2.72706 10.1636 2.98356C8.93387 2.79945 7.71044 2.79945 6.50592 2.98356C6.39681 2.72136 6.23538 2.40073 6.09411 2.15059C6.08339 2.13218 6.06259 2.12265 6.04176 2.12583C4.89905 2.32265 3.80554 2.66739 2.78517 3.13594C2.77633 3.13975 2.76876 3.14611 2.76374 3.15435C0.689563 6.25326 0.12136 9.276 0.400102 12.2613C0.401363 12.2759 0.409561 12.2898 0.420913 12.2987C1.78939 13.3037 3.115 13.9139 4.41599 14.3183C4.43681 14.3247 4.45887 14.317 4.47212 14.2999C4.77987 13.8796 5.0542 13.4364 5.28941 12.9704C5.3033 12.9431 5.29005 12.9107 5.26167 12.9C4.82654 12.7349 4.4122 12.5336 4.01364 12.3051C3.98212 12.2867 3.97959 12.2416 4.00859 12.22C4.09247 12.1571 4.17636 12.0917 4.25645 12.0257C4.27094 12.0136 4.29113 12.0111 4.30816 12.0187C6.92655 13.2142 9.76126 13.2142 12.3488 12.0187C12.3658 12.0105 12.386 12.013 12.4011 12.0251C12.4812 12.0911 12.5651 12.1571 12.6496 12.22C12.6786 12.2416 12.6767 12.2867 12.6452 12.3051C12.2466 12.5381 11.8323 12.7349 11.3965 12.8993C11.3681 12.9101 11.3555 12.9431 11.3694 12.9704C11.6097 13.4358 11.884 13.879 12.1861 14.2993C12.1987 14.317 12.2214 14.3247 12.2422 14.3183C13.5495 13.9139 14.8751 13.3037 16.2436 12.2987C16.2556 12.2898 16.2631 12.2765 16.2644 12.2619C16.598 8.8106 15.7056 5.81265 13.8989 3.15498C13.8944 3.14611 13.8869 3.13975 13.8781 3.13594ZM5.68043 10.4435C4.89211 10.4435 4.24257 9.71978 4.24257 8.83093C4.24257 7.94207 4.87952 7.21831 5.68043 7.21831C6.48763 7.21831 7.13089 7.94843 7.11827 8.83093C7.11827 9.71978 6.48132 10.4435 5.68043 10.4435ZM10.9967 10.4435C10.2084 10.4435 9.55884 9.71978 9.55884 8.83093C9.55884 7.94207 10.1958 7.21831 10.9967 7.21831C11.8039 7.21831 12.4471 7.94843 12.4345 8.83093C12.4345 9.71978 11.8039 10.4435 10.9967 10.4435Z"
												fill="var(--colors-scale9)"
											/>
										</g>
										<defs>
											<clipPath id="clip0_1182_99731">
												<rect width="15.9993" height={16} fill="white" transform="translate(0.333984 0.222656)" />
											</clipPath>
										</defs>
									</svg>
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
