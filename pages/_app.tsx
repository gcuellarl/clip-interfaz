import React from "react";
import App, { AppProps } from "next/app";
import dynamic from 'next/dynamic';
import "antd/dist/antd.css";


const AppLayout = dynamic(() => import('../src/components/layout'), { ssr: false });


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
    
        <title>NextJs Antdesign Typescript</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      <Component {...pageProps} />
    </AppLayout>
  );
}


