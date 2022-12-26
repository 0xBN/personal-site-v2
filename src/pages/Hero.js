import React from 'react';
import { Button } from 'components';
import { GithubSvg, LinkedinSvg, MailSvg, DotPatternSvg } from 'svgs';
import { user } from '../data/userData';
import { DownArrowSvg } from 'svgs';

export const Hero = ({ darkMode }) => {
  return (
    <div className='flex min-h-fullScreenMinHeight flex-col justify-evenly px-8 md:min-h-screen md:py-24'>
      <div className='relative flex flex-col-reverse gap-6 text-3xl font-semibold'>
        <h2 className='z-10  text-7xl font-bold md:text-9xl'>Brian N.</h2>
        <p className='text-4xl text-primaryLight dark:text-primaryDark '>
          Hello there!, I'm-
        </p>
        <div className='absolute -bottom-16 left-40 h-40 w-40 rotate-45  animate-spin-slow md:left-72 md:h-56 md:w-56'>
          <DotPatternSvg dotColor={darkMode ? '#f7c1ea' : '#9E0000'} />
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <p className='text-xl font-semibold md:text-3xl'>Software Engineer</p>
        <p className='text-xl font-semibold text-secondaryLight dark:text-secondaryDark md:text-3xl'>
          Self-driven, quick-starter, passionate developer with a curious mind.
        </p>
        <p className='text-xl font-semibold md:text-3xl'>
          I enjoy solving complex and challenging real-world problems.
        </p>
      </div>
      <div className='flex items-center justify-center gap-4 py-8 md:justify-start'>
        <Button svg={<GithubSvg />} label='Github' link={user.github} />
        <Button svg={<LinkedinSvg />} label='LinkedIn' link={user.linkedin} />
        <Button svg={<MailSvg />} label='Contact' link={user.mailUser} />
      </div>
      <div className='absolute right-1/2 bottom-0 translate-x-1/2 md:hidden'>
        <DownArrowSvg />
      </div>
    </div>
  );
};
