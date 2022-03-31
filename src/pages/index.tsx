import { Br, Us } from 'react-flags-select';
import React, { useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { LocalesKeys } from 'typings/global';
import { PortfolioItem } from 'components';
import { SECTIONS } from 'utils/constants';

export const getServerSideProps: GetServerSideProps = async ({
  query,
  locale,
}) => {
  const items = SECTIONS.Components.find((c) => c.position === 6)!.props[
    locale as LocalesKeys
  ]!.portfolioItems;

  return {
    props: {
      item: items!.find((item) => item.id === query.itemId) || null,
      locale: locale,
    },
  };
};

const Home: React.FC<any> = ({ item, locale }) => {
  return (
    <>
      <div className='relative flex flex-col min-h-screen text-white'>
        {SECTIONS.Components.sort((a, b) =>
          a.position > b.position ? 1 : -1
        ).map((SECTION, i) => (
          <SECTION.Component
            {...(SECTION.props[locale as LocalesKeys] as any)}
            key={i}
          />
        ))}

        <Link
          href='/'
          locale={locale === 'en-US' ? 'pt-BR' : 'en-US'}
          scroll={false}
          replace
        >
          <a
            className='bottom-2 lg:right-4 left-4 lg:left-auto fixed z-20'
            aria-label={
              locale === 'en-US'
                ? 'Mudar o idíoma para português'
                : 'Change the language to english'
            }
          >
            {locale === 'en-US' ? (
              <Br className='lg:w-12 lg:h-12 w-10 h-10' />
            ) : (
              <Us className='lg:w-12 lg:h-12 w-10 h-10' />
            )}
          </a>
        </Link>
      </div>
      <AnimatePresence>{item && <PortfolioItem item={item} />}</AnimatePresence>
    </>
  );
};

export default Home;
