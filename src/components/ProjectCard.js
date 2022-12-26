import React from 'react';
import {
  Carousel,
  EmphasizedWord,
  SvgAndLabel,
  TechnologyList,
} from 'components';
import { ExternalLinkSvg, GithubSvg, ProjectSvg } from 'svgs';
import { CardLinkOut } from './CardLinkOut';

export const ProjectCard = ({ project }) => {
  return (
    <div
      className='flex w-full flex-col gap-6 overflow-hidden rounded-xl bg-slate-200 p-2 text-lg shadow-md shadow-black/30
    dark:bg-slate-700 md:max-w-[400px] md:p-4'
    >
      <div className='relative'>
        <Carousel images={project.images} />
      </div>

      <div className='p-2'>
        <h3 className='text-center text-4xl font-bold'>
          <SvgAndLabel
            iconPlacement='left'
            label={project.name}
            svg={<ProjectSvg />}
            customAlignment='flex w-full items-center justify-center gap-2 py-4'
          />
        </h3>
        <TechnologyList list={project.technologies} />
        <p>
          <EmphasizedWord word='Description' /> {project.description}
        </p>
        <p>
          <EmphasizedWord word='Challenges ' />
          {project.challenges}
        </p>

        <CardLinkOut codeLink={project.code} liveLink={project.link} />
      </div>
    </div>
  );
};
