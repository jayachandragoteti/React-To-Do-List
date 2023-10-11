import React from 'react'

const SearchItem = ({ search, setSearchItem }) => {
    return (
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='search'>
                Search
            </label>
            <input
                id='search'
                type='text'
                role="searchbox"
                placeholder='Search Items'
                value={search}
                onChange={e => setSearchItem(e.target.value)}
            />
        </form>
    )
}

export default SearchItem