import { httpRequest } from '~/utils/';

const searchProduct = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get('product/search', {
            params: {
                q: q,
                type: type,
            },
        });
        return res.data;
    } catch (err) {
        console.error(err);
        return undefined;
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export const searchService = {
    searchProduct,
};
