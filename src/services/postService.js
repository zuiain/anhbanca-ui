import { httpRequest } from '~/utils/';

const createProduct = async (product) => {
    try {
        const res = await httpRequest.post('/product/create', product);
        return res;
    } catch (err) {
        console.error(err);
        return err;
    }
};

export const postService = { createProduct };
