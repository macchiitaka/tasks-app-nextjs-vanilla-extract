import type { FC } from 'react';
import { useEffect } from 'react';

import { useSetToken, useToken } from '../../store/TokenProvider';
import { Loader } from './Loading/Loader';

export const withAuth = (Component: React.FC) => {
  const Authentication: FC = () => {
    const token = useToken();
    const setToken = useSetToken();

    useEffect(() => {
      const id = setTimeout(() => {
        setToken('__TOKEN__');
      }, 300);
      return () => {
        clearTimeout(id);
      };
    }, [setToken]);

    return token ? <Component /> : <Loader />;
  };
  return Authentication;
};
