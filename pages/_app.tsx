import '../styles/globals.scss'
import Router, { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import type { AppProps } from 'next/app'
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import styled from "styled-components"

function MyApp({ Component, pageProps }: AppProps) {

  const [loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', (url) => {
    console.log('Loading: ', url);
    setLoading(true);
  });
  Router.events.on('routeChangeComplete', (url) => {
    console.log('Loading complete: ', url);
    setLoading(true);
  });
  // Can be a string as well. Need to ensure each key-value pair ends with ;
  const override = css`
    display: block;
    position: absolute;
    top: 45%;
    left: 45%;
  `;
  
  const Screen = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  opacity: 0;
  animation: fade 0.4s ease-in forwards;
  background: black;
  `;

  return (
    <>
    {loading && 
    <Screen>
    <div className="sweet-smile">
      <HashLoader css={override} size={100} color={"#2563EB"} speedMultiplier={1.3} />
    </div>
    </Screen>
    }
    <Component {...pageProps} />
    </>
  );
}

export default MyApp
