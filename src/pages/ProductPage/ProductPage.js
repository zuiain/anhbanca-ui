import classNames from 'classnames/bind';
import styles from './ProductPage.module.scss';
import SortBar from './SortBar';

const cx = classNames.bind(styles);

function ProductPage() {
    return (
        <div className={cx('wrapper')}>
            <SortBar />
        </div>
    );
}

export default ProductPage;
