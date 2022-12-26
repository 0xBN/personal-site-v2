import React from 'react';

export const SkillCard = ({ label, svg, bg }) => {
  return (
    <li
      className={`m-4 flex w-[60px] flex-col items-center gap-2 border border-transparent  md:w-auto`}
    >
      <span
        className={`w-[60px] md:w-28 
        ${bg === 'white' ? 'rounded-xl bg-white' : null}
        ${bg === 'black' ? 'rounded-xl bg-black' : null}`}
      >
        {svg}
      </span>
      <span className='text-center text-xs font-bold uppercase md:text-xl'>
        {label}
      </span>
    </li>
  );
};
