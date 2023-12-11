import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Filter.module.scss';
//import { useLocalStorage } from '~/utils';

const cx = classNames.bind(styles);

function Filter({ title, data, searchName, formRef }) {
    const navigate = useNavigate();
    const pathUrl = useLocation();
    const [isChecked, setIsChecked] = useState([]);
    const [searchParams] = useSearchParams();
    const searchedArray = [...searchParams];

    //console.log(Object.fromEntries([...searchParams]));

    useEffect(() => {
        // set lại list checked box dựa theo url mỗi khi url bị refresh
        let resArr = [];
        if (data.length > 0 && searchedArray.length > 0) {
            searchedArray.map(([searchedName, searchedValue]) => {
                if (searchedName === searchName) {
                    searchedValue.split('OR').map((value) => {
                        const index = data.findIndex((item) => item.value === value);
                        if (index !== -1) {
                            resArr.push(index);
                        }
                        return 1;
                    });
                }
                return 1;
            });
        }
        resArr.length > 0 && setIsChecked(resArr);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // lưu query trc khi bị render lại
    let _queryStr = useRef();
    _queryStr.current = '';

    useEffect(() => {
        // từ list checkbox sẽ navigate
        let queryStr;

        const createQuery = (firstLetter) => {
            let str = '';
            if (isChecked.length > 0) {
                isChecked.sort().map((item, index) => {
                    if (index === 0) {
                        str = str + `${firstLetter}${searchName}=${data[item].value}`;
                    } else {
                        str = str + `OR${data[item].value}`;
                    }
                    return 1;
                });
            }
            return str;
        };

        const createOldQuery = (searchedValue, searchedName) => {
            let str = '';
            searchedValue.split('OR').map((value, index) => {
                if (index === 0) {
                    str = str + `?${searchedName}=${value}`;
                } else {
                    str = str + `OR${value}`;
                }
                return 1;
            });
            return str;
        };

        console.log(searchedArray);

        if (searchedArray.length > 0) {
            searchedArray.map(([searchedName, searchedValue]) => {
                if (searchedName === searchName) {
                    if (!_queryStr.current) {
                        console.log('Chay code khi search name k thay đổi');
                        queryStr = createQuery('?');
                    }
                } else {
                    console.log('Chay code khi search name thay đổi');
                    _queryStr.current = createOldQuery(searchedValue, searchedName);
                    queryStr = _queryStr.current + createQuery('&');
                }
                return 1;
            });
        } else {
            queryStr = queryStr = createQuery('?');
        }

        navigate(pathUrl.pathname + queryStr);
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
            <div className={cx('title')}>{title}</div>
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
