/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import styles from './SortBar.module.scss';

const cx = classNames.bind(styles);

function SortBar() {
    const sortArr = [
        { label: 'Mặc định', query: '' },
        { label: 'Giá Tăng Dần', query: 'gia-tang-dan' },
        { label: 'Giá Giảm Dần', query: 'gia-giam-dan' },
        { label: 'Từ A-Z', query: 'tu-a-z' },
        { label: 'Từ Z-A', query: 'tu-z-a' },
    ];

    const handleOnChange = () => {};

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content-left')}>
                <label className={cx('content-title')}>sắp xếp</label>
                <select className={cx('content-select')} name="sapxep" onChange={handleOnChange}>
                    {sortArr.map((item, index) => (
                        <option key={index} value={item.query}>
                            {item.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default SortBar;
