/* eslint-disable @next/next/no-document-import-in-page */
import { Head, Html, Main, NextScript } from 'next/document';

export const MyDocument = () => (
  <Html lang="en-US">
    <Head>
      <meta name="Description" content="Tasks" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);
