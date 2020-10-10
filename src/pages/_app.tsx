import { AppProps } from 'next/app';

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
