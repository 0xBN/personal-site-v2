import React from 'react';
import darkBrian from '../shared/img/darkBrianV2.png';
import lightBrian from '../shared/img/lightBrianV2.png';

export const ProfilePicture = ({ darkMode, customDisplay, customRounded }) => {
  let display = customDisplay ? customDisplay : 'hidden';
  let rounded = customRounded ? customRounded : null;

  return (
    <img
      className={`${display} ${rounded}   md:block`}
      src={darkMode ? darkBrian : lightBrian}
      alt=''
    />
  );
};
