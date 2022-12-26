import React from 'react';
import { SectionTitle } from 'components';

export const Section = ({ id, title, content, lastPage }) => {
  return (
    <section
      id={id}
      className={`${
        lastPage
          ? 'min-h-fullScreenLastPage md:min-h-fullScreenLastPageDesktop'
          : 'min-h-fullScreenMinHeight md:min-h-screen'
      }  scroll-m-[74px]  md:scroll-m-0`}
    >
      <>{title && <SectionTitle title={title} />}</>
      {content}
    </section>
  );
};
