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
      }  scroll-m-[130px] md:scroll-m-[81px]`}
    >
      <>{title && <SectionTitle title={title} />}</>
      {content}
    </section>
  );
};
