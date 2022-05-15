import '../style/global.css';

import type { AppProps } from 'next/app';

import { AxiosProvider } from '../../store/AxiosProvider';
import { ReactQueryClientProvider } from '../../store/ReactQueryClientProvider';
import { RepositoryProvider } from '../../store/RepositoryProvider';
import { TokenProvider } from '../../store/TokenProvider';
import * as classes from './style.css';

export const MyApp = ({ Component, pageProps }: AppProps) => (
  <TokenProvider>
    <AxiosProvider>
      <ReactQueryClientProvider>
        <RepositoryProvider>
          <div className={classes.root}>
            <Component {...pageProps} />
          </div>
        </RepositoryProvider>
      </ReactQueryClientProvider>
    </AxiosProvider>
  </TokenProvider>
);
