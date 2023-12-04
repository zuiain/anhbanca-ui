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

// eslint-disable-next-line import/no-anonymous-default-export
export const getService = {
    getIMGBanner,
};
