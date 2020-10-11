import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.API_BASE_URL,
});

export async function getAllFiles() {
    const res = await instance.get(`/files`);
    return res.data;
}

export async function getFileById(id: string) {
    const res = await instance.get(`/files/${id}`);
    return res.data;
}

export async function uploadFile(data: FormData) {
    const res = await instance.post(`/files`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res.data;
}
