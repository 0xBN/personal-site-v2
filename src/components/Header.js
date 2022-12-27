import React from 'react';
import { NavBar } from 'components';
import { slideRightAnimation, slideDownAnimation } from 'utils';

export const Header = ({
  setDarkMode,
  darkMode,
  toggleTheme,
  isWindowSmall,
  pageLoaded,
}) => {
  return (
    <header
      className={`sticky top-0 z-30 bg-navLight shadow-sm shadow-gray-500 dark:bg-navDark dark:text-white dark:shadow-md md:relative 
      ${isWindowSmall ? null : slideRightAnimation(!pageLoaded, 0)}
      ${!isWindowSmall ? null : slideDownAnimation(!pageLoaded, 0)}
      `}
    >
      <NavBar
        toggleTheme={toggleTheme}
        darkMode={darkMode}
        isWindowSmall={isWindowSmall}
      />
    </header>
  );
};
