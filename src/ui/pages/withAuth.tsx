import type { FC } from 'react';
import { useEffect, useState } from 'react';

export const withAuth = (Component: React.FC) => {
  const Authentication: FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const id = setTimeout(() => {
        setIsAuthenticated(true);
      }, 500);
      return () => {
        clearTimeout(id);
      };
    }, []);

    return isAuthenticated ? <Component /> : <div>Loading...</div>;
  };
  return Authentication;
};
