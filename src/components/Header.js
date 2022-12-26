import React from 'react';
import { NavBar } from 'components';

export const Header = ({
  setDarkMode,
  darkMode,
  toggleTheme,
  isWindowSmall,
}) => {
  return (
    <header className='sticky top-0 z-30 bg-navLight shadow-sm shadow-gray-500 dark:bg-navDark dark:text-white dark:shadow-md md:relative'>
      <NavBar
        toggleTheme={toggleTheme}
        darkMode={darkMode}
        isWindowSmall={isWindowSmall}
      />
    </header>
  );
};
