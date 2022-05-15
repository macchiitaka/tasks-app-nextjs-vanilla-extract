import constate from 'constate';
import { useMemo } from 'react';

import { createAxios } from '../http';
import { useSetToken } from './TokenProvider';

export const [AxiosProvider, useAxios] = constate(
  () => {
    const setToken = useSetToken();
    return useMemo(() => {
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
      return axios;
    }, [setToken]);
  },
  (axios) => axios,
);
