import React from 'react';
import { MoonSvg, SunSvg } from 'svgs';
import { SvgAndLabel } from 'components';

export const ThemeToggle = ({ darkMode, toggleTheme, isWindowSmall }) => {
  let label = darkMode ? 'dark' : 'light';
  return (
    <button
      className='font-bold active:bg-transparent md:absolute md:bottom-4 md:right-1/2 md:w-full md:translate-x-1/2 md:text-3xl md:hover:bg-orange-400 md:dark:hover:bg-yellow-600'
      onClick={toggleTheme}
    >
      <SvgAndLabel
        iconPlacement='right'
        label={isWindowSmall ? '' : label}
        svg={darkMode ? <MoonSvg /> : <SunSvg />}
        customAlignment='flex w-full items-center justify-end gap-2 md:px-6 px-4'
        customSize='w-8 md:w-10'
      />
    </button>
  );
};
