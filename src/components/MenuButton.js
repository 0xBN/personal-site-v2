import React from 'react';

export const MenuButton = ({ toggleMenu, showMenu }) => {
  const middleLine = `h-1 w-8 absolute -mt-3 ml-1.5 rounded ${
    showMenu
      ? 'bg-black dark:bg-transparent bg-transparent'
      : 'bg-black dark:bg-white'
  }`;

  const topLine = `before:bg-black before:dark:bg-white before:absolute before:h-1 before:w-8  before:rounded before:bg-black before:-translate-x-4 before:-translate-y-3
  
  ${
    !showMenu
      ? null
      : 'before:-translate-x-4 before:-translate-y-0 before:-rotate-45'
  }

  `;

  const bottomLine = `after:bg-black after:dark:bg-white after:absolute after:h-1 after:w-8 after:rounded after:bg-black after:-translate-x-4 after:translate-y-3 ${
    !showMenu ? null : 'after:-translate-y-0 after:rotate-45'
  }`;

  const animateOut = 'transition-all duration-500 rotate-180';

  const animateIn = 'transition-all duration-500 -rotate-180';

  return (
    <button
      className='translate px-4 text-transparent md:hidden'
      onClick={toggleMenu}
    >
      menu
      <div
        className={`${
          showMenu ? animateOut : animateIn
        } ${middleLine} ${topLine} ${bottomLine}`}
      ></div>
    </button>
  );
};
