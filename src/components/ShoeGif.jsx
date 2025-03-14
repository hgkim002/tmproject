import React from 'react';
import '../styles/ShoeGif.css';

function ShoeGif() {
  const prodimg = process.env.PUBLIC_URL + '/images/img01.gif';
  const avatar = process.env.PUBLIC_URL + '/images/icons/avatar.png';
  return (
    <div className='prod-container'>
      <div id='image-box'>
        <img src={prodimg} className='imageItem' />
      </div>
      <div id='profile-box'>
        <img src={avatar} alt='' />
        <span>운동화</span>
      </div>
      <div id='contents-box'>
        <div id='name'>판매자명</div>
        <div id='price'>50000원</div>
        <div id='description'>매우좋은운동화~~~</div>
      </div>
    </div>
  );
}

export default ShoeGif;
