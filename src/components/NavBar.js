import { useState } from 'react';

import {
  Menu,
  ThemeToggle,
  ProfilePicture,
  MenuButton,
  MobileNameHeader,
} from 'components';

export const NavBar = ({
  toggleTheme,
  darkMode,
  isWindowSmall,
  currentSection,
  setCurrentSection,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !showMenu);
  };

  return (
    <nav className='flex flex-row-reverse justify-between md:min-w-full md:flex-col md:text-right'>
      {/* MOBILE ONLY  */}
      <MenuButton toggleMenu={toggleMenu} showMenu={showMenu} />
      <MobileNameHeader
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        setCurrentSection={setCurrentSection}
      />

      <ProfilePicture darkMode={darkMode} />
      <Menu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        isWindowSmall={isWindowSmall}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
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
