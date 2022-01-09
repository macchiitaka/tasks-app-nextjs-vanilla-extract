/* eslint-disable @next/next/no-document-import-in-page */
import { Head, Html, Main, NextScript } from 'next/document';

const script = `
!function () {
        if ('TechtouchObject' in window && document.querySelector('script#techtouch-snippet')) return;
        window.TechtouchObject = {
        organizationUuid: "orga-612dcbe7-b556-d8fb-2758-41963c269cd7"
      };
        var e = document.createElement("script"); e.async = 1, e.src = "https://dev-apps.techtouch.jp/script/orga-612dcbe7-b556-d8fb-2758-41963c269cd7/main.js"; e.id = "techtouch-snippet";
        var t = document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e, t)
      }()`;

export const MyDocument = () => (
  <Html lang="en-US">
    <Head>
      <meta name="Description" content="Tasks" />
      {/* eslint-disable-next-line react/no-danger */}
      <script dangerouslySetInnerHTML={{ __html: script }} />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);
