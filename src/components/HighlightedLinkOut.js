import React from 'react';

export const HighlightedLinkOut = ({ label, link }) => {
  return (
    <a
      className='text-primaryLight dark:text-primaryDark'
      href={link}
      target='_blank'
      rel='noreferrer'
    >
      {' '}
      {label}
    </a>
  );
};
