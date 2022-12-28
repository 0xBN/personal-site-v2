import React from 'react';
import { RightChevronSvg, LeftChevronSvg } from 'svgs';

export const SlideShowNavButton = ({ handleSlideShowNav, direction }) => {
  return (
    <button
      data-next-slide
      className='z-[5] h-11 w-11 rounded-full bg-black/20 fill-white active:bg-black md:h-11 md:w-11  md:hover:bg-black/40 md:hover:fill-white'
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
