import React from 'react';
import { MoonSvg, SunSvg } from 'svgs';
import { SvgAndLabel } from 'components';

export const ThemeToggle = ({ darkMode, toggleTheme, isWindowSmall }) => {
  return (
    <button
      className='font-bold active:bg-transparent md:absolute md:bottom-2 md:right-1/2 md:w-full md:translate-x-1/2 md:text-3xl md:hover:bg-orange-400 md:dark:hover:bg-yellow-600'
      onClick={toggleTheme}
    >
      {darkMode ? (
        <SvgAndLabel
          iconPlacement='right'
          label={isWindowSmall ? '' : 'dark'}
          svg={<MoonSvg />}
        />
      ) : (
        <SvgAndLabel
          iconPlacement='right'
          label={isWindowSmall ? '' : 'light'}
          svg={<SunSvg />}
        />
      )}
    </button>
  );
};
