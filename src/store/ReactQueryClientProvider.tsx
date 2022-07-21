import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { FC, PropsWithChildren } from 'react';
import { useMemo } from 'react';

export const ReactQueryClientProvider: FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
    [],
  );

  return (
    <QueryClientProvider client={queryClient}>
      {process.env.NODE_ENV !== 'production' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
      {children}
    </QueryClientProvider>
  );
};
