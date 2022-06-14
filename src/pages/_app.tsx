import { AppProps } from 'next/app';
import { GeneralContextProvider } from '../context/GeneralContext';
import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GeneralContextProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </GeneralContextProvider>
  );
}

export default MyApp;
