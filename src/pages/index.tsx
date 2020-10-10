import { ChangeEvent, FormEvent, useState } from 'react';

import Head from '../components/head';

const HomePage = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.currentTarget.files;
        setFile(files ? files[0] : null);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (file) {
            const formData = new FormData();
            formData.append('file', file);
        }
    };

    return (
        <>
            <Head title="Home | File Uploader" />

            <section>
                <h1>File Uploader</h1>
                <p>
                    This is a simple application to upload and retrieve files
                    from a database
                </p>
            </section>

            <section>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="file"></label>
                        <input
                            type="file"
                            name="file"
                            id="file"
                            onChange={handleChange}
                        />
                    </div>
                </form>
                <button type="submit">Upload</button>

                <img src="" alt="" />
            </section>
        </>
    );
};

export default HomePage;
