import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { useLocalStorage } from '~/utils';
import config from '~/config';

const cx = classNames.bind(styles);

function Sidebar() {
    const { category } = useParams();
    const formRef = useRef();

    const [savedSearchPriceSelected, setSearchPriceSelected] = useLocalStorage(
        process.env.REACT_APP_LOCAL_STORAGE_NAME_SEARCH_PRICE,
    );

    const dataArr = config.searchPrice || [];

    const [isChecked, setIsChecked] = useState(savedSearchPriceSelected() || []);

    function handleOnChange(index) {
        setIsChecked((pre) => {
            if (isChecked.includes(index)) {
                return isChecked.filter((checked) => checked !== index);
            } else {
                return [...pre, index];
            }
        });
        formRef.current.submit();
    }

    useEffect(() => {
        setSearchPriceSelected(isChecked);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isChecked]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('price')}>
                <div className={cx('price-title')}>GIÁ THÀNH</div>
                <div className={cx('price-content')}>
                    <form action={'/loai-san-pham/' + category} method="get" ref={formRef}>
                        {dataArr.map(({ title, checked, value, disabled }, index) => (
                            <div className={cx('checkbox-wrapper')} key={index}>
                                <label className={cx('checkbox-content')}>
                                    <input
                                        type="checkbox"
                                        className={cx('checkbox-input', {
                                            checked: isChecked.includes(index) || checked,
                                        })}
                                        checked={isChecked.includes(index) || checked}
                                        onChange={() => handleOnChange(index)}
                                        disabled={disabled}
                                        name="gia"
                                        value={value}
                                    />
                                    <span className={'prevent-select ' + cx('checkbox-label')}>{title}</span>
                                </label>
                            </div>
                        ))}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
