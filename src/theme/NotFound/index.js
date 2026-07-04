import React, {useEffect} from 'react';
import Head from '@docusaurus/Head';

const redirectUrl = 'https://malyansystem.github.io/m200u_wiki/docs/intro';

export default function NotFound() {
  useEffect(() => {
    window.location.replace(redirectUrl);
  }, []);

  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0; url=${redirectUrl}`} />
        <link rel="canonical" href={redirectUrl} />
      </Head>
      <main style={{padding: '2rem'}}>
        <p>Redirecting to the wiki introduction...</p>
        <p>
          <a href={redirectUrl}>Continue to the wiki introduction</a>
        </p>
      </main>
    </>
  );
}
