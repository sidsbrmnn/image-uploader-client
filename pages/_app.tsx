import React from 'react';

import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/css/bootstrap.css';
import 'popper.js/dist/umd/popper';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
