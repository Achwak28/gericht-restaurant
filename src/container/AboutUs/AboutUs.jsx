import React from 'react';
import images from "../../constants/images";

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g logo" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about spoon" className='spoon__img' />
        <p className="p__opensans">We are a great restaurant,
        we are a great restaurant, we are a great restaurant</p>
        <button className="custom__button" type='button'>Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about spoon" className='spoon__img' />
        <p className="p__opensans">We are a great restaurant,
        we are a great restaurant, we are a great restaurant</p>
        <button className="custom__button" type='button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
