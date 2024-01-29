import React from 'react';
import { images } from '../../constants';
import './SubHeading.css';

const SubHeading = ({ title }) => (
  <div className='app__subheading'>
    <p className='p__cormorant app__subheading-p'>{ title }</p>
    <img src={images.spoon} alt="spoon_image" className='spoon__img app_subheading-img' />
  </div>
);

export default SubHeading;
