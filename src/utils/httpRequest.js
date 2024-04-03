import axios from 'axios';

// instance request
const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

// customize get
const get = async (path, options = {}) => {
    const res = await request.get(path, options);
    return res.data;
};

// customize post
const post = async (path, options = {}) => {
    const res = await request.post(path, options);
    return res;
};

// customize delete
const del = async (path, options = {}) => {
    const res = await request.delete(path, options);
    return res;
};

// customize put
const put = async (path, options = {}) => {
    const res = await request.put(path, options);
    return res;
};

const httpRequest = { request, get, post, del, put };

export default httpRequest;
