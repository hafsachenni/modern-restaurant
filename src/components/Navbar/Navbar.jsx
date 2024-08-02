import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <a href="/">
          <img src={images.gericht} alt="logo"/>
        </a>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Menu</a></li>
        <li className='p__opensans'><a href="#awards">Awards</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
      </ul>
      <div className='app__navbar-order'>
        <a href='#order' className='p__opensans'>Order Online</a>
        <div />
        <a href='/' className='p__opensans'>Specials</a>
      </div>
      <div className='app__navbar-smallmenu'>
        <GiHamburgerMenu color='#FADADD' fontSize={27} onClick={() => setMenuState(true)} />

        {menuState && (
        <div className='app__navbar-smallmenu_overlay flex__center slide-bottom'>
          <MdClose color="black"  fontSize={27} className="overlay__close" onClick={() => setMenuState(false)} />
          <ul className='app__navbar-smallmenu-links'>
            <li className='p__opensans'><a href="#home">Home</a></li>
            <li className='p__opensans'><a href="#about">About</a></li>
            <li className='p__opensans'><a href="#menu">Menu</a></li>
            <li className='p__opensans'><a href="#awards">Awards</a></li>
            <li className='p__opensans'><a href="#contact">Contact</a></li>
          </ul>
        </div>
        )}

    
      </div>
    </nav>

  );
}
export default Navbar;