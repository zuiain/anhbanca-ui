import { httpRequest } from '~/utils/';

const deleteProduct = async (id) => {
    try {
        const res = await httpRequest.del(`/product/delete/${id}`);
        return res;
    } catch (err) {
        console.error(err);
        return err;
    }
};

export const deleteService = { deleteProduct };
