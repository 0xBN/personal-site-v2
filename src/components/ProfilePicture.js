import React from 'react';
import brianPic from '../shared/img/brian.png';

export const ProfilePicture = () => {
  return (
    <img className='hidden rounded-3xl p-4 md:block' src={brianPic} alt='' />
  );
};
