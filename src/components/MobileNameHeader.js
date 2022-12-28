import React from 'react';
import { user } from 'data';

export const MobileNameHeader = ({
  showMenu,
  setShowMenu,
  setCurrentSection,
}) => {
  const clickHeroLogo = () => {
    if (showMenu) setShowMenu(false);
    setCurrentSection('hero');
    window.location.href = '#';
  };

  return (
    <div onClick={clickHeroLogo} className='py-3 md:hidden'>
      <h1 className=' text-center text-xl font-bold'>
        {user.first} {user.last}
      </h1>
      <p>{user.title}</p>
    </div>
  );
};
