import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import classNames from 'classnames/bind';
import styles from './ProductManagePage.module.scss';
import { useDebounce } from '~/hooks';
import { SpinnerIcon } from '~/components/Icons';
import { getService, searchService } from '~/services';

const cx = classNames.bind(styles);

function Search({ checkDeleteSuccess, setCheckDeleteSuccess, setCurrentPage, setProductsResult }) {
    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);
    const debounceValue = useDebounce(searchValue, 500);

    // api search products
    const fetchSearchApi = async () => {
        setLoading(true);
        const _searchResult = await searchService.searchProduct(debounceValue);
        if (_searchResult.length > 0) {
            setProductsResult(_searchResult);
            setLoading(false);
        } else {
            setProductsResult([]);
            toast.info('Không tìm thấy sản phẩm !', {
                toastId: 'infoToast_1',
            });
            inputRef.current.focus();
            setLoading(false);
        }
    };

    // api get list of products
    const fetchGetProductApi = async () => {
        const res = await getService.getAllProducts();
        if (res === undefined) {
            setProductsResult([]);
        } else if (res.length > 0) {
            setProductsResult(res);
        } else {
            setProductsResult([]);
            alert('No product found');
        }
    };

    // get list of products
    useEffect(() => {
        debounceValue === '' ? fetchGetProductApi() : fetchSearchApi();
        setCurrentPage(1);
        setCheckDeleteSuccess(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounceValue, checkDeleteSuccess]);

    // on change input search field
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <div className={cx('card-search')}>
            <input
                type="text"
                id="search-input"
                name="search-input"
                ref={inputRef}
                className={cx('search-input')}
                value={searchValue}
                placeholder="Nhập thông tin về sản phẩm muốn tìm kiếm ... "
                onChange={handleChange}
            />
            {loading && <SpinnerIcon className={cx('loading')} width="1.8rem" height="1.8rem" />}
        </div>
    );
}

export default Search;
