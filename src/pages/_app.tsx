import { AppProps } from 'next/app';

import 'tailwindcss/tailwind.css';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <header></header>

            <main id="content">
                <Component {...pageProps} />
            </main>

            <footer></footer>
        </>
    );
};

export default App;
