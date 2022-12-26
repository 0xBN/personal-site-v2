import React from 'react';
import { SvgAndLabel } from 'components';

export const ContactOption = ({ label, link, newTab, svg }) => {
  return (
    <a
      className='z-10 py-4 font-bold hover:text-black/40 dark:hover:text-white/70 md:py-8 md:text-3xl'
      href={link}
      target={newTab && '_blank'}
      rel='noreferrer'
    >
      <SvgAndLabel
        iconPlacement='left'
        svg={svg}
        label={label}
        customSize='w-10 md:w-10'
      />
    </a>
  );
};
