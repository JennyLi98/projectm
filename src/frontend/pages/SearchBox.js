import React from 'react';

const SearchBox = ({searchChange}) => {
  return (
    <input type='search'
    placeholder='search animals'
    onChange={searchChange}/>
  );
}


export default SearchBox;
