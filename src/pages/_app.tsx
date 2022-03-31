import 'styles/base.css';
import 'styles/components.css';
import 'styles/utilities.css';

import { AnimateSharedLayout } from 'framer-motion';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { LocalesKeys } from 'typings/global';
import { SEO } from 'utils/constants';

export default function App({ Component, pageProps, router }: AppProps) {
  const seo = SEO[router.locale as LocalesKeys];
  return (
    <>
      <DefaultSeo
        title={seo.title}
        description={seo.description}
        canonical='https://www.gabrielraposo.com.br/'
        languageAlternates={[
          { href: 'https://www.gabrielraposo.com.br/pt-BR', hrefLang: 'pt-BR' },
          { href: 'https://www.gabrielraposo.com.br/', hrefLang: 'en-US' },
        ]}
        openGraph={{
          url: 'https://www.gabrielraposo.com.br/',
          title: seo.title,
          description: seo.description,
          site_name: seo.name,
        }}
      />
      <AnimateSharedLayout>
        <Component {...pageProps} key={router.route} />
      </AnimateSharedLayout>
    </>
  );
}
