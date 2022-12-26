import { ContactOption } from 'components';
import React from 'react';
import { DotPatternSvg, GithubSvg, LinkedinSvg, MailSvg, PhoneSvg } from 'svgs';
import { user } from '../data/userData';

export const Contact = () => {
  return (
    <div className='relative flex flex-col gap-4 p-4 text-2xl md:p-8'>
      <ContactOption label={user.phone} link='#contact' svg={<PhoneSvg />} />
      <ContactOption
        label={user.email}
        link={`mailto:${user.email}`}
        svg={<MailSvg />}
      />
      <ContactOption
        label={user.github.split('https://www.')[1]}
        link={user.github}
        newTab={true}
        svg={<GithubSvg />}
      />
      <ContactOption
        label={user.linkedin.split('https://www.')[1]}
        link={user.linkedin}
        svg={<LinkedinSvg />}
      />

      <div className='absolute bottom-24 left-48 z-0 h-40 w-40 animate-spin-slow md:bottom-40 md:left-96 md:h-56 md:w-56'>
        <DotPatternSvg dotColor={`#888`} />
        {/* <DotPatternSvg dotColor={darkMode ? '#888' : '#333'} /> */}
      </div>
    </div>
  );
};
