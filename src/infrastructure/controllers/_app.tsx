import '../../interfaces/ui/style/global.css';

import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { useMemo } from 'react';
import type { DehydratedState } from 'react-query';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

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

export const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className={classes.root}>
    <Provider dehydratedState={pageProps.dehydratedState}>
      <Component {...pageProps} />
    </Provider>
  </div>
);
