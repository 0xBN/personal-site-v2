import React from 'react';
import { SvgAndLabel, Button } from 'components';
import { GithubSvg, ExternalLinkSvg } from 'svgs';

export const CardLinkOut = ({ codeLink, liveLink }) => {
  return (
    <p className='flex flex-row justify-evenly pt-4'>
      <Button svg={<GithubSvg />} label='Code' link={codeLink} />
      <Button svg={<ExternalLinkSvg />} label='Live' link={liveLink} />
    </p>
  );
};
