import Head from 'next/head';

import * as classes from './Loader.css';

export const Loader: React.FC = () => (
  <>
    <Head>
      <title>Loading...</title>
    </Head>
    <div className={classes.main}>Loading...</div>
  </>
);
