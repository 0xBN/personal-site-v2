import React from 'react';
import { Section } from 'components';
import { About, Projects, Skills, Contact, Hero } from 'pages';

export const Main = ({ darkMode }) => {
  return (
    <main className='min-h-screen bg-white text-black dark:bg-neutral-900 dark:text-white'>
      <Section id='hero' content={<Hero darkMode={darkMode} />} />
      <Section id='about' title='About Me' content={<About />} />
      <Section id='projects' title='Projects' content={<Projects />} />
      <Section id='skills' title='Skills' content={<Skills />} />
      <Section
        id='contact'
        title='Contact Me'
        content={<Contact />}
        lastPage={true}
      />
    </main>
  );
};
