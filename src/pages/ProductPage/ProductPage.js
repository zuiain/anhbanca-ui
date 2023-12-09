import classNames from 'classnames/bind';
import styles from './ProductPage.module.scss';

const cx = classNames.bind(styles);

function ProductPage() {
    return (
        <div className={cx('wrapper')}>
            <h1>ProductPage</h1>
        </div>
    );
}

export default ProductPage;
