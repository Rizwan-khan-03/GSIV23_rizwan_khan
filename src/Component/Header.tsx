import React from 'react';

interface HeaderProps {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ handleSearch }) => {
  return (
    <div className='header-class'>
    <div className='search'>
      <i className="material-icons">search</i>
      <input type="search" id="gsearch" name="gsearch" onChange={handleSearch} placeholder="Search..." />
    </div>
    <div className='home-icon'>
      <i className="material-icons">home</i>
    </div>
  </div>
  
  );
}

export default Header;
