import React from 'react';

export const DotPatternSvg = ({ dotColor }) => {
  return (
    <svg viewBox='0 0 400 400'>
      <pattern
        id='pattern-circles'
        x='0'
        y='0'
        width='50'
        height='50'
        patternUnits='userSpaceOnUse'
        patternContentUnits='userSpaceOnUse'
      >
        <circle
          id='pattern-circle'
          cx='10'
          cy='10'
          r='2'
          fill={dotColor}
        ></circle>
      </pattern>

      <rect
        id='rect'
        x='0'
        y='0'
        width='100%'
        height='100%'
        fill='url(#pattern-circles)'
      ></rect>
    </svg>
  );
};
