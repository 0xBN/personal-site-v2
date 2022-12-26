import { ProjectCard } from 'components';
import React from 'react';
import { projects } from 'data';

export const Projects = () => {
  const projectsList = projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));
  return (
    <article className='flex flex-wrap justify-items-center gap-4 px-4 py-2 md:grid md:grid-cols-2 md:place-content-center md:p-6 '>
      {projectsList}
    </article>
  );
};
