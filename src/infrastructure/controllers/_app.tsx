import '../../interfaces/ui/style/global.css';

import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { useEffect, useMemo, useState } from 'react';
import type { DehydratedState } from 'react-query';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { ColorSchemeContext } from '../../interfaces/ui/style/color-scheme';
import * as classes from './style.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GetConstructorArgs<T> = T extends new (...args: infer U) => any
  ? U
  : never;

export const Provider: FC<{
  queryClientConfig?: GetConstructorArgs<typeof QueryClient>[0];
  dehydratedState?: DehydratedState;
}> = (props) => {
  const queryClient = useMemo(
    () =>
      new QueryClient(
        props.queryClientConfig ?? {
          defaultOptions: {
            queries: {
              refetchOnWindowFocus: false,
            },
          },
        },
      ),
    [props.queryClientConfig],
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={props.dehydratedState}>
        {process.env.NODE_ENV !== 'production' &&
          process.env.STORYBOOK !== 'true' && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
        {props.children}
      </Hydrate>
    </QueryClientProvider>
  );
};

export const MyApp = ({ Component, pageProps }: AppProps) => {
  const [colorScheme, setColorScheme] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    setColorScheme(
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light',
    );
    const listener = (e: MediaQueryListEvent) => {
      setColorScheme(e.matches ? 'dark' : 'light');
    };
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQueryList.addEventListener('change', listener);
    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  });

  return (
    <Provider dehydratedState={pageProps.dehydratedState}>
      <ColorSchemeContext.Provider value={colorScheme}>
        <div className={classes.root[colorScheme]}>
          <Component {...pageProps} />
        </div>
      </ColorSchemeContext.Provider>
    </Provider>
  );
};
