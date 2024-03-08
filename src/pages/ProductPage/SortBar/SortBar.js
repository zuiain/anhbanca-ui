/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import { useQueryParam } from 'use-query-params';
import styles from './SortBar.module.scss';
import config from '~/config';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function SortBar({ sortName }) {
    const [sort, setSort] = useQueryParam(sortName);
    const [value, setValue] = useState();

    useEffect(() => {
        const index = config.filter.sort.findIndex((item) => item.value === sort);
        if (index > -1) {
            setValue(sort);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleOnChange = (e) => {
        if (e.target.value === 'default') {
            setSort(undefined);
            setValue('default');
        } else {
            setValue(e.target.value);
            setSort(e.target.value);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content-left')}>
                <label className={cx('content-title')}>sắp xếp</label>
                <select
                    className={cx('content-select')}
                    value={value}
                    defaultValue={'default'}
                    name={sortName}
                    onChange={(e) => handleOnChange(e)}
                >
                    <option value={'default'}>Mặc định</option>
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

SortBar.propTypes = {
    sortName: PropTypes.string.isRequired,
};

export default SortBar;
