import React from 'react';

import { SlideShow } from 'components';

export const Carousel = ({ images }) => {
  if (images.length === 0) return;

  return (
    <div className='flex aspect-square flex-row p-2 md:max-w-[400px]'>
      <SlideShow images={images} />
    </div>
  );
};
