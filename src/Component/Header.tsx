import React from 'react'

function Header() {
    return (
        <div className='header-class'>
            <div className='search'>
                <i className="material-icons">search</i>
                <input type="search" id="gsearch" name="gsearch" />
            </div>
            <div className='home-icon'>
                <i className="material-icons">home</i>
            </div>
        </div>
    )
}

export default Header