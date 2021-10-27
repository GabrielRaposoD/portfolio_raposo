import { AppProps } from 'next/app';

import 'styles/base.css';
import 'styles/components.css';
import 'styles/utilities.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
