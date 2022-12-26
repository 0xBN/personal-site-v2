import React from 'react';

export const SectionTitle = ({ title }) => {
  return (
    <h2 className='sticky top-[76px] z-10 my-2 bg-primaryLight py-1 text-center text-2xl font-bold text-white shadow-sm shadow-black dark:bg-primaryDark md:top-0 md:py-4 md:text-5xl'>
      {title}
    </h2>
  );
};
