import { AppProps } from "next/app";
import Head from "next/head";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { csrClient } from "@/services/react-query";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={csrClient}>
      <Head>
        <title>Pokemon</title>
      </Head>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}