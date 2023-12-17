import classNames from 'classnames/bind';
import styles from './ProductDetailPage.module.scss';
import parse from 'html-react-parser';

const cx = classNames.bind(styles);

function Description({ data }) {
    return (
        <div className={cx('description')}>
            <div className={cx('description-title')}>Mô Tả Sản Phẩm</div>
            <div className={cx('description-content')}>{parse(data)}</div>
        </div>
    );
}

export default Description;
