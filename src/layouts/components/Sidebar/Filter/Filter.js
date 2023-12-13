import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Filter.module.scss';
//import { useLocalStorage } from '~/utils';

const cx = classNames.bind(styles);

function Filter({ title, data, searchName, formRef }) {
    const [isChecked, setIsChecked] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchedArray = [...searchParams];

    //console.log(Object.fromEntries([...searchParams]));

    // get list checkbox from url
    useEffect(() => {
        // set lại list checked box dựa theo url mỗi khi url bị refresh
        let resArr = [];

        if (data.length > 0 && searchedArray.length > 0) {
            searchedArray.map(([searchedName, searchedValue]) => {
                if (searchedName === searchName) {
                    const index = data.findIndex((item) => item.value === searchedValue);
                    if (index > -1) {
                        resArr.push(index);
                    }
                    return 1;
                }
                return 1;
            });
        }

        resArr.length > 0 && setIsChecked(resArr);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // navigate form list checkbox
    useEffect(() => {
        let params = [];
        let searchedParams = [...searchedArray];
        let checkChangeSearchName = false;

        const createParams = () => {
            if (isChecked.length > 0) {
                isChecked.sort().map((item) => {
                    params.push([searchName, data[item].value]);
                    return 1;
                });
            }
        };

        createParams();

        for (let i = 0; i < searchedParams.length; i++) {
            const [searchedName] = searchedParams[i];
            if (JSON.stringify(params).includes(JSON.stringify(searchedParams[i]))) {
                searchedParams.splice(i, 1);
                i = i - 1;
            } else {
                if (searchedName === searchName) {
                    searchedParams.splice(i, 1);
                    i = i - 1;
                }
            }
            if (searchedName !== searchName) {
                checkChangeSearchName = true;
            }
        }

        checkChangeSearchName && (params = [...searchedParams, ...params]);

        setSearchParams(params);
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
