import React from 'react';

export const Footer = () => {
  return (
    <footer className='col-span-full max-w-full bg-slate-300/50 py-4 text-center shadow-md shadow-black dark:bg-black/50 dark:text-white'>
      Designed and developed by Brian N. <br />
      Built with{' '}
      <a
        className='text-primaryLight dark:text-primaryDark'
        href='https://reactjs.org/'
      >
        React
      </a>{' '}
      and{' '}
      <a
        className='text-primaryLight dark:text-primaryDark'
        href='https://tailwindcss.com/'
      >
        Tailwind CSS
      </a>
      .
    </footer>
  );
};
