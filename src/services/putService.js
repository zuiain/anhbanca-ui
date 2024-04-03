import { httpRequest } from '~/utils/';

const updateProduct = async (id, data) => {
    try {
        const res = await httpRequest.put(`/product/update/${id}`, data);
        return res;
    } catch (err) {
        console.error(err);
        return err;
    }
};

export const putService = { updateProduct };
