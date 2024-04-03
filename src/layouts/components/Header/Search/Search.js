import { useState, useEffect, useRef } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import PopperWrapper from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import { XMarkIcon, SpinnerIcon, SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import { searchService } from '~/services';

const cx = classNames.bind(styles);
const { searchProduct } = searchService;

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);

    const debounceValue = useDebounce(searchValue, 500);
    const inputRef = useRef();

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const _searchResult = await searchProduct(debounceValue);
            if (_searchResult.length > 0) {
                setSearchResult(_searchResult);
                setLoading(false);
            } else {
                setSearchResult([]);
                inputRef.current.focus();
                setLoading(false);
            }
        };

        fetchApi();

        //encodeURIComponent -- chuyển ký tự đặc biệt như &, ^ , # sang kiểu khác tránh làm lỗi url
    }, [debounceValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResults = () => {
        setShowResults(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <>
            <Tippy
                appendTo={() => document.body}
                placement="bottom"
                interactive
                visible={showResults && searchResult.length > 0}
                onClickOutside={handleHideResults}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Sản phẩm tìm được</h4>
                            <div className={cx('search-result-box')}>
                                {searchResult.map((result) => (
                                    <AccountItem data={result} key={result.id} />
                                ))}
                            </div>
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Tìm kiếm sản phẩm ..."
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResults(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <XMarkIcon />
                        </button>
                    )}
                    {loading && <SpinnerIcon className={cx('loading')} />}
                    <span className={cx('span-splitter')}></span>
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </Tippy>
        </>
    );
}

export default Search;
