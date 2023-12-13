/* eslint-disable array-callback-return */
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './SortBar.module.scss';
import config from '~/config';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function SortBar({ sortName }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchedArray = [...searchParams];
    const [query, setQuery] = useState([]);

    useEffect(() => {
        let finalQuery;
        let searchedParams = [...searchedArray];

        if (searchedParams.length > 0) {
            for (let i = 0; i < searchedParams.length; i++) {
                const [searchedName] = searchedParams[i];
                if (searchedName === sortName) {
                    searchedParams.splice(i, 1);
                    i = i - 1;
                }
            }
        }

        query.length > 0 ? (finalQuery = [...searchedParams, query]) : (finalQuery = []);

        setSearchParams(finalQuery);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    const handleOnChange = (e) => {
        setQuery([e.target.name, e.target.value]);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content-left')}>
                <label className={cx('content-title')}>sắp xếp</label>
                <select className={cx('content-select')} name={sortName} onChange={(e) => handleOnChange(e)}>
                    {config.filter.sort.map((item, index) => (
                        <option key={index} value={item.value}>
                            {item.title}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default SortBar;
