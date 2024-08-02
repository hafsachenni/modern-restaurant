import React from 'react';
import { images } from '../../constants';

import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_details">
      <SubHeading title="Welcome to Glazed"/>
      <h1 className="app__header-h1">Discover Our Sweet Creations</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Indulge in our delicious baked goods made with love and the finest ingredients. From cakes to pastries, there's a sweet treat for every occasion.</p>
      <button type="button" className="custom__button">Explore Menu</button>

    </div>
    <div className="app__wrapper_image">
      <img src={images.cake} alt="hero-image" />
    </div>
  </div>
);

export default Header;
