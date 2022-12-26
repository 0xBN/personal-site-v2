import React from 'react';
import { RightChevronSvg, LeftChevronSvg } from 'svgs';

export const SlideShowNavButton = ({ handleSlideShowNav, direction }) => {
  return (
    <button
      data-next-slide
      className='z-[5] h-12 w-6 rounded-sm bg-black/20 fill-white active:bg-black md:h-1/4 md:w-8  md:hover:bg-black/40 md:hover:fill-white'
      onClick={() => {
        handleSlideShowNav(direction);
      }}
    >
      <div className='pointer-events-none'>
        {direction === 'next' ? <RightChevronSvg /> : <LeftChevronSvg />}
      </div>
    </button>
  );
};
