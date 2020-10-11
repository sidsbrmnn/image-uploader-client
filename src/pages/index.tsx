import { ChangeEvent, FormEvent, useState } from 'react';

import Head from '../components/head';
import { uploadFile } from '../lib/api';

const HomePage = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.currentTarget.files;
        setFile(files ? files[0] : null);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (file) {
            const data = new FormData();
            data.append('file', file);
            await uploadFile(data);
        }
    };

    return (
        <>
            <Head title="Home | File Uploader" />

            <section className="py-16">
                <div className="max-w-6xl px-4 mx-auto sm:px-6 md:px-8 lg:px-10">
                    <h1 className="text-3xl font-extrabold text-gray-900 md:leading-none sm:text-4xl md:text-5xl">
                        Upload files{' '}
                        <span className="text-blue-600">easily</span>
                        <br className="hidden md:block" /> to GridFS
                    </h1>
                    <p className="mt-3 text-base text-gray-600 md:text-lg">
                        Simple, easy illustration of using GridFS to store and
                        retrieve files.
                    </p>
                    <div className="mt-8">
                        <form onSubmit={handleSubmit}>
                            <div className="flex items-center justify-start space-x-4">
                                <label
                                    className="inline-flex items-center px-4 py-3 overflow-hidden text-gray-900 transition duration-150 ease-in-out bg-gray-200 rounded cursor-pointer focus:bg-gray-300 hover:bg-gray-300"
                                    role="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5 text-gray-500"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="ml-2 text-sm font-medium">
                                        Select a file
                                    </span>
                                    <input
                                        type="file"
                                        className="hidden"
                                        onChange={handleChange}
                                    />
                                </label>
                                <button
                                    type="submit"
                                    disabled={!file}
                                    className="px-4 py-3 text-sm font-medium text-white transition duration-150 ease-in-out bg-blue-600 rounded-md focus:shadow-outline-blue hover:bg-blue-500 focus:bg-blue-500 focus:outline-none"
                                >
                                    Upload
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-100">
                <div className="max-w-6xl px-4 mx-auto sm:px-6 md:px-8 lg:px-10">
                    <h2 className="text-2xl font-bold text-center text-gray-900 sm:text-3xl md:text-4xl">
                        Recent uploads
                    </h2>
                </div>
            </section>
        </>
    );
};

export default HomePage;
