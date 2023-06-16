import React from 'react';

const SearchBar = ({
	searchText,
	onSearchInputChange,
	showDropdown,
	searchResults,
	onDropdownItemClick,
}) => {
	const hasSearchText = searchText.length > 0;
	return (
		<div className="mb-4">
			<input
				type="text"
				placeholder="Search..."
				value={searchText}
				onChange={onSearchInputChange}
				onFocus={() => showDropdown(searchResults.length > 0)}
				onBlur={() => showDropdown(false)}
				className="px-6  search py-2 border rounded bg-gray-950 border-slate-800 w-11/12"
			/>
			{showDropdown && (
				<div className="absolute bg-black z-max border">
					{hasSearchText && (
						<>
							{searchResults.length > 0 ? (
								searchResults.map((snippet) => (
									<div
										key={snippet.id}
										className="pl-8 pr-2 py-1 relative cursor-pointer hover:text-slate-600 text-slate-500"
										onClick={() =>
											onDropdownItemClick(snippet)
										}
									>
										{snippet.description}
									</div>
								))
							) : (
								<div className="p-2">No results found.</div>
							)}
						</>
					)}
				</div>
			)}
		</div>
	);
};

export default SearchBar;
