import React from 'react';
import { HighlightedLinkOut } from 'components';

export const Footer = () => {
  return (
    <footer className='col-span-full max-w-full bg-slate-300/50 py-4 text-center shadow-md shadow-black dark:bg-black/50 dark:text-white'>
      <p>
        Designed and developed by
        <span>
          <HighlightedLinkOut label='Brian N' link='https://0xbn.github.io/' />
        </span>
        .
      </p>
      <p>
        Built with
        <span>
          <HighlightedLinkOut label='React' link='https://reactjs.org/' />
        </span>{' '}
        and
        <span>
          <HighlightedLinkOut
            label='Tailwind CSS'
            link='https://tailwindcss.com/'
          />
        </span>
        .
      </p>
    </footer>
  );
};
