import { EmphasizedWord, ProfilePicture } from 'components';
import React from 'react';
import { user } from 'data';

export const About = ({ darkMode, pageLoaded }) => {
  return (
    <div className='text-md py-4 px-6 md:flex md:flex-col md:justify-center md:text-3xl'>
      <div className='mb-4 grid w-full place-content-center md:hidden'>
        <ProfilePicture
          darkMode={darkMode}
          customDisplay='block w-28 p-0 m-0'
          customRounded='rounded-md'
        />
      </div>
      <p>{user.about.line1}</p>
      <br />
      <p>{user.about.line2}</p>
      <br />
      <p>{user.about.line3}</p>
      <br />
      <p className='py-2 md:py-4'>
        <EmphasizedWord word='Languages ' />
        {user.about.languages.toString().replaceAll(',', ', ')}
      </p>
      <p className='py-2 md:py-4'>
        <EmphasizedWord word='Frontend ' />
        {user.about.frontend.toString().replaceAll(',', ', ')}
      </p>
      <p className='py-2 md:py-4'>
        <EmphasizedWord word='Backend ' />
        {user.about.backend.toString().replaceAll(',', ', ')}
      </p>
      <p className='py-2 md:py-4'>
        <EmphasizedWord word='Other Technologies ' />
        {user.about.otherTechnologies.toString().replaceAll(',', ', ')}
      </p>
    </div>
  );
};
