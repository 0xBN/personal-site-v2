import React from 'react';

export const EmphasizedWord = ({ word, custom }) => {
  return (
    <span
      className={`font-bold text-primaryLight dark:text-primaryDark ${custom}`}
    >
      {word}
    </span>
  );
};
