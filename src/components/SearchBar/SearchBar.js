import React from 'react';
import './SearchBar.css';
import image from './nav-icons.png';

const SearchBar = (props) => {
   return <div className='searchbar'>
       <img className='thumbnail' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgNXDKgEA0pEatWDOvOIeVQtoBYGJyAjZBsKBX6nXDIbhBQfIP'></img>

        <input className= 'search' 
        value={props.inputText} 
        onChange = {props.searchInput}
        placeholder='search'
        />
        
        
        <img className='nav-icons' src={image}/>
        </div>
};

export default SearchBar;