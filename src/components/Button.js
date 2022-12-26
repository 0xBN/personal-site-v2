import React from 'react';
import { SvgAndLabel } from 'components';
import { GithubSvg } from 'svgs';

export const Button = ({ label, svg, link }) => {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <button
      onClick={handleClick}
      className='flex rounded-md bg-slate-100 p-2 font-bold hover:bg-slate-300 dark:bg-slate-800 dark:text-white md:p-4 md:text-3xl dark:md:hover:bg-slate-600'
    >
      <SvgAndLabel iconPlacement='left' label={label} svg={svg} />
    </button>
  );
};
