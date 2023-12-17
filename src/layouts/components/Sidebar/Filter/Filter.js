import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Filter.module.scss';
import { useQueryParam, ArrayParam, withDefault } from 'use-query-params';

const cx = classNames.bind(styles);
const MyFiltersParam = withDefault(ArrayParam, []);

function Filter({ title, data, searchName }) {
    const [isChecked, setIsChecked] = useState([]);
    const [filter, setFilter] = useQueryParam(searchName, MyFiltersParam);

    // get list checkbox from url
    useEffect(() => {
        let resArr = [];
        if (data.length > 0 && filter.length > 0) {
            filter.map((searchedValue) => {
                const index = data.findIndex((item) => item.value === searchedValue);
                if (index > -1) {
                    resArr.push(index);
                }
                return 1;
            });
        }
        resArr.length > 0 && setIsChecked((pre) => [...pre, ...resArr]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // navigate form list checkbox
    useEffect(() => {
        const resArr = [];
        if (isChecked.length > 0) {
            isChecked.sort().map((item) => {
                resArr.push(data[item].value);
                return 1;
            });
        }
        setFilter(resArr);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isChecked]);

    const handleOnChange = (index) => {
        setIsChecked((pre) => {
            if (isChecked.includes(index)) {
                //uncheck
                return isChecked.filter((item) => item !== index);
            } else {
                return [...pre, index];
            }
        });
    };

    return (
        <div className={cx('wrapper')}>
            <div className="title-line-run">{title}</div>
            <div className={cx('content')}>
                {data &&
                    data.length > 0 &&
                    data.map(({ title, checked, value, disabled }, index) => (
                        <div className={cx('checkbox-wrapper')} key={index}>
                            <label className={cx('checkbox-content')}>
                                <input
                                    type="checkbox"
                                    className={cx('checkbox-input', {
                                        checked: isChecked.includes(index) || checked,
                                    })}
                                    name={searchName}
                                    value={value}
                                    checked={isChecked.includes(index) || checked}
                                    disabled={disabled}
                                    onChange={() => handleOnChange(index)}
                                />
                                <span className={'prevent-select ' + cx('checkbox-label')}>{title}</span>
                            </label>
                        </div>
                    ))}
            </div>
        </div>
    );
}

Filter.propTypes = {
    data: PropTypes.array.isRequired,
    searchName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Filter;
