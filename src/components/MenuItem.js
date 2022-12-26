import React from 'react';
import { SvgAndLabel } from 'components';

export const MenuItem = ({ link, label, svg, setShowMenu, smoothScrollTo }) => {
  if (!link) return;

  const scrollHandle = () => {
    if (!smoothScrollTo) return;
    let position = document.getElementById(link.split('#')[1]);
    position.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const noScrollAnimation = () => {
    // console.log('went to ', link);
    window.location.href = link;
  };

  const handleClick = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    hamburgerBtn.classList.toggle('toggle-btn');
    setShowMenu(false);
    smoothScrollTo ? scrollHandle() : noScrollAnimation();
  };

  return (
    <li
      onClick={handleClick}
      className='cursor-pointer py-6 text-4xl hover:bg-slate-200 dark:hover:bg-slate-700'
    >
      <div className='font-bold md:text-3xl'>
        <SvgAndLabel
          iconPlacement='right'
          customSize='w-14 md:w-10'
          label={label}
          svg={svg}
        />
      </div>
    </li>
  );
};
