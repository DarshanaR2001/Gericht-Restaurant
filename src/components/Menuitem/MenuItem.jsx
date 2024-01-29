import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price, tags}) => (
  <div className='app__menuitem'>
    <div className='app__menuitem-head'>
      <div className='app__menuitem-name'>
        <p className='p__menuitem'>{title}</p>
      </div>
      <div className='app__menuitem-dash' />
      <div className='app__menuitem-price'>
        <p className='p__menuitem'>{price}</p>
      </div>
    </div>
    <div className='app__menuitem-sub'>
      <p className='p__sub'>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
