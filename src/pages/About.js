import { EmphasizedWord, ProfilePicture } from 'components';
import React from 'react';

export const About = ({ darkMode }) => {
  return (
    <div className='text-md py-4 px-6 md:flex md:flex-col md:justify-center md:text-3xl'>
      <div className='mb-4 grid w-full place-content-center md:hidden'>
        <ProfilePicture
          darkMode={darkMode}
          customDisplay='block w-28 p-0 m-0'
          customRounded='rounded-md'
        />
      </div>
      <p>I am a fullstack developer.</p>
      <br />
      <p>
        Growing up, I have always had an affinity for everything tech related. I
        loved exploring software mods for my devices and building PCs for my
        friends during my free time.
      </p>
      <br />
      <p>
        Today I am passionate about developing applications that solve
        real-world problems impacting millions of users.
      </p>
      <br />
      <p className='py-2 md:py-4'>
        <EmphasizedWord word='Languages ' />
        Javascript(ES6+), Typescript, HTML, CSS, Python
      </p>
      <p className='py-2 md:py-4'>
        <EmphasizedWord word='Frontend' /> Tailwind CSS, React
      </p>
      <p className='py-2 md:py-4'>
        <EmphasizedWord word='Backend' /> Node, MongoDB, Express, Firebase
      </p>
      <p className='py-2 md:py-4'>
        <EmphasizedWord word='Other Technologies' /> Redux, Jest, Webpack, NPM,
        Git, Github, Railway, Render, PassportJS, JSON Web Token
      </p>
    </div>
  );
};
