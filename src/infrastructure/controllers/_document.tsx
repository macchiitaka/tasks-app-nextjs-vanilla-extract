/* eslint-disable @next/next/no-document-import-in-page */
import { Head, Html, Main, NextScript } from 'next/document';

const CF_BEACON = {
  token: '1da2080af4aa4458aa31a10b6bcb56f2',
  spa: true,
};

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
      {/* Cloudflare Web Analytics */}
      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon={JSON.stringify(CF_BEACON)}
      />
      {/* End Cloudflare Web Analytics */}
    </body>
  </Html>
);
