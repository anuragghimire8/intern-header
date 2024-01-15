import React, { useState } from 'react';
import './Header.css';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [menu, setMenu] = useState(true);

  return (
    <div>
      <div className="header">
        <h1 className='heading'>Header</h1>

        <nav className='nav'>
          <ul className="navbar">
            <li><a href="#">Brand Story</a></li>
            <li><a href="#">Brand Story</a></li>
            <li><a href="#">Brand Story</a></li>
            <li><a href="#">Brand Story</a></li>
          </ul>
        </nav>
        <div style={{ padding: "20px", color: "white" }}>
          {menu ? 
            <FaBars className="icons" onClick={() => setMenu(!menu)} />
            :
            <AiOutlineClose className='icons' onClick={() => setMenu(!menu)} />
          }
        </div>

       
        { !menu && (
          <>
            <div className={`another ${menu ? '' : 'active'}`}>
              <h1 className='head'>Header</h1>
         
              <ul>
                <li>Brand Story</li>
                <li>Brand Story</li>
                <li>Brand Story</li>
                <li>Brand Story</li>
              </ul>
              <div style={{ padding: "40px", color: "white" }}>
              {menu ? 
                <FaBars className="icon" onClick={() => setMenu(!menu)} />
                :
                <AiOutlineClose className='icon' onClick={() => setMenu(!menu)} />
              }
            </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
