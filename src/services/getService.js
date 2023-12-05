import httpRequest from '~/utils/';

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
        const res = await httpRequest.get('product?sort=name*sale-desc&limit=6');
        return res.data;
    } catch (err) {
        console.error(err);
        return undefined;
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export const getService = {
    getIMGBanner,
    getSaleProducts,
};
