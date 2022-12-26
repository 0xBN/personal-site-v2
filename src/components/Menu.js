import React from 'react';
import { MenuItem } from 'components';
import { ContactSvg, GithubSvg, ProjectSvg, ResumeSvg, UserSvg } from 'svgs';

export const Menu = ({ showMenu, setShowMenu, isWindowSmall }) => {
  let showProperties = !showMenu
    ? 'opacity-0 pointer-events-none -translate-x-80'
    : null;

  return (
    <ul
      className={`absolute ${showProperties} transx top-[72px] min-h-fullScreenMinHeight min-w-full bg-gray-300  pr-4 outline-none transition-all duration-500 ease-in-out dark:bg-slate-800 md:pointer-events-auto md:relative md:top-auto
      md:block md:min-h-0 md:translate-x-0 md:bg-transparent md:opacity-100 dark:md:bg-transparent`}
      id='dropdown-menu'
    >
      <MenuItem
        setShowMenu={setShowMenu}
        link='#about'
        label='About Me'
        iconPlacement='right'
        svg={<UserSvg />}
        smoothScrollTo={!isWindowSmall}
      />
      <MenuItem
        setShowMenu={setShowMenu}
        link='#projects'
        label='Projects'
        iconPlacement='right'
        svg={<ProjectSvg />}
        smoothScrollTo={!isWindowSmall}
      />
      <MenuItem
        setShowMenu={setShowMenu}
        link='#skills'
        label='Skills'
        iconPlacement='right'
        svg={<GithubSvg />}
        smoothScrollTo={!isWindowSmall}
      />
      <MenuItem
        setShowMenu={setShowMenu}
        link='#contact'
        label='Contact Me'
        iconPlacement='right'
        svg={<ContactSvg />}
        smoothScrollTo={!isWindowSmall}
      />
      <MenuItem
        setShowMenu={setShowMenu}
        link='#resume'
        label='Resume'
        iconPlacement='right'
        svg={<ResumeSvg />}
        smoothScrollTo={false}
      />
    </ul>
  );
};
