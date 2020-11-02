/* eslint-disable react/prop-types */
// import App from 'next/app'
import '../../styles/globals.css';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../ui/layout';

import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
  faAngleDown,
  faAngleRight,
  faBars,
  faEnvelope,
  faHome,
  faPhone,
  faFlag,
  faMapMarker,
  faBirthdayCake,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import theme from '../theme';
import { AppProps } from 'next/app';

config.autoAddCss = false;

library.add(
  faHome,
  faAngleDown,
  faAngleRight,
  faEnvelope,
  faTwitter,
  faGithub,
  faLinkedin,
  faBars,
  faPhone,
  faFlag,
  faMapMarker,
  faBirthdayCake
);

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
