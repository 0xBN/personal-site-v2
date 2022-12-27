import { useState, useEffect } from 'react';

import { Menu, ThemeToggle, ProfilePicture } from 'components';

export const NavBar = ({ toggleTheme, darkMode, isWindowSmall }) => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {}, []);

  const toggleMenu = () => {
    console.log('toggleMenu');
    const hamburgerBtn = document.getElementById('hamburger-button');
    hamburgerBtn.classList.toggle('toggle-btn');
    setShowMenu((prev) => !showMenu);
  };

  const clickHeroLogo = () => {
    if (showMenu) setShowMenu(false);
    window.location.href = '#';
  };

  return (
    <nav className='flex flex-row-reverse justify-between md:min-w-full md:flex-col md:text-right'>
      {/* Mobile Below */}

      {/* Hamburger Menu */}
      <button
        onClick={toggleMenu}
        className='px-4 text-transparent md:hidden'
        id='hamburger-button'
      >
        menu
        <div className='absolute top-10 -mt-1 h-1 w-8 rounded bg-black transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-black before:transition-all before:duration-500 after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-black after:transition-all after:duration-500 dark:bg-white dark:before:bg-white dark:after:bg-white'></div>
      </button>

      {/* Center Name */}
      <div onClick={clickHeroLogo} className='py-3 md:hidden'>
        <h1 className=' text-center text-xl font-bold'>Brian N.</h1>
        <p>Software Developer</p>
      </div>
      {/* Mobile Above */}

      <ProfilePicture darkMode={darkMode} />
      <Menu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        isWindowSmall={isWindowSmall}
      />

      <ThemeToggle
        darkMode={darkMode}
        isWindowSmall={isWindowSmall}
        toggleTheme={toggleTheme}
      />
    </nav>
  );
};

export default NavBar;
