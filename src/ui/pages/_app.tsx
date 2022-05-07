import '../style/global.css';

import type { AppProps } from 'next/app';
import type { FC, PropsWithChildren } from 'react';
import { useMemo } from 'react';
import type { DehydratedState } from 'react-query';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { createAxios } from '../../http';
import { RepositoryProvider } from '../../repositories/RepositoryProvider';
import { TaskRepository } from '../../repositories/TaskRepository';
import { TokenProvider, useSetToken } from '../../state/token';
import * as classes from './style.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GetConstructorArgs<T> = T extends new (...args: infer U) => any
  ? U
  : never;

export const Provider: FC<
  PropsWithChildren<{
    queryClientConfig?: GetConstructorArgs<typeof QueryClient>[0];
    dehydratedState?: DehydratedState;
  }>
> = (props) => {
  const setToken = useSetToken();
  const repository = useMemo(() => {
    const axios = createAxios({});
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 403) {
          setToken('');
        }
        return Promise.reject(error);
      },
    );
    return { taskRepository: new TaskRepository(axios) };
  }, [setToken]);

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
    <RepositoryProvider {...repository}>
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV !== 'production' && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
        {props.children}
      </QueryClientProvider>
    </RepositoryProvider>
  );
};

export const MyApp = ({ Component, pageProps }: AppProps) => (
  <TokenProvider>
    <Provider dehydratedState={pageProps.dehydratedState}>
      <div className={classes.root}>
        <Component {...pageProps} />
      </div>
    </Provider>
  </TokenProvider>
);