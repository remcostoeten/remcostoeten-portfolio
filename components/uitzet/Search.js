import React, { useState } from 'react';

export default function Search({ handleSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search items..." />
            <button type="submit">Search</button>
        </form>
    );
}
