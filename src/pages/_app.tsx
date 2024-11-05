import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import Head from 'next/head';
import {AppProps} from 'next/app';
import {csrClient} from '@/services/react-query';
import {NotFound404} from '@/components/molecule';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {QueryClientProvider} from '@tanstack/react-query';
import {useQueryErrorDetector} from '@/hooks/useQueryErrorDetector';

const NextHead = Head;

export default function App({Component, pageProps}: AppProps) {
  const {commonApiError} = useQueryErrorDetector();

  if (commonApiError) {
    return (
      <NotFound404
        title={'API Returned Not Found'}
        description={'Sorry, the API you are looking for does not exist.'}
      />
    );
  }

  return (
    <QueryClientProvider client={csrClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" /> */}

      <NextHead>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon/monsterball-312x320.png" />
      </NextHead>

      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
