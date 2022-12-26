import React from 'react';
import { TechnologyItem } from 'components';
import { nanoid } from 'nanoid';

export const TechnologyList = ({ list }) => {
  return (
    <ul className='flex flex-wrap gap-2'>
      {list.map((item) => (
        <TechnologyItem key={nanoid()} item={item} />
      ))}
    </ul>
  );
};
