import React from 'react';
import './Header.css'

const Header = () => {
     return (
          <div>
               <h1>Welcome to my Rest Countries website</h1>
               <nav className='header-nav'>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
               </nav>
          </div>
     );
};

export default Header;