import { httpRequest } from '~/utils/';

const getIMGBanner = async () => {
    try {
        const res = await httpRequest.get('/banner');
        return res.data;
    } catch (err) {
        console.error(err);
        return undefined;
    }
};

const getSaleProducts = async () => {
    try {
        const res = await httpRequest.get('product?sort=name*sale-desc');
        return res.data;
    } catch (err) {
        console.error(err);
        return undefined;
    }
};

const getNewestProducts = async () => {
    try {
        // day moi la cai dung nhung do chua co img nen danh ;)) const res = await httpRequest.get('product?sort=createdAt-desc');
        const res = await httpRequest.get('product?sort=createdAt-asc');
        return res.data;
    } catch (err) {
        console.error(err);
        return undefined;
    }
};

const getDetailProduct = async (slug) => {
    try {
        // day moi la cai dung nhung do chua co img nen danh ;)) const res = await httpRequest.get('product?sort=createdAt-desc');
        const res = await httpRequest.get(`product/${slug}`);
        return res;
    } catch (err) {
        console.error(err);
        return undefined;
    }
};

const getDetailCategory = async (slug) => {
    try {
        // day moi la cai dung nhung do chua co img nen danh ;)) const res = await httpRequest.get('product?sort=createdAt-desc');
        const res = await httpRequest.get(`category/${slug}`);
        return res;
    } catch (err) {
        console.error(err);
        return undefined;
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export const getService = {
    getIMGBanner,
    getSaleProducts,
    getNewestProducts,
    getDetailProduct,
    getDetailCategory,
};
