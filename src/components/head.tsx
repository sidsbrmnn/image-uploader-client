import NextHead from 'next/head';

type Props = {
    title: string;
};

const Head = ({ title }: Props) => {
    return (
        <NextHead>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />

            <title>{title}</title>
        </NextHead>
    );
};

export default Head;
