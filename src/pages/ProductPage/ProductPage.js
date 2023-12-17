import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductPage.module.scss';
import SortBar from './SortBar';
import { getService } from '~/services';
import { formatMoney } from '~/utils';

const cx = classNames.bind(styles);

function ProductPage() {
    const [productsResult, setProductsResult] = useState([]);
    const [toVND] = formatMoney;

    useEffect(() => {
        // get sale products
        const fetchApi = async () => {
            const products = await getService.getNewestProducts();
            if (products === undefined) {
                setProductsResult([]);
            } else if (products.length > 0) {
                setProductsResult(products);
            } else {
                setProductsResult([]);
                alert('No products found');
            }
        };
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={cx('wrapper')}>
            <SortBar sortName={'sort'} />
            <div className={cx('product')}>
                <div className="row">
                    {productsResult.map((product) => (
                        <div className="col l-3 m-4 c-6" key={product._id}>
                            <Link to={`/${product.slug}`} className={cx('product-item')}>
                                <div
                                    className={cx('product-img')}
                                    style={{ backgroundImage: `url(${product.imgUrl})` }}
                                ></div>
                                <div className={cx('product-content')}>
                                    <p className={cx('product-name')}>{product.name}</p>
                                    <p className={cx('product-price')}>
                                        <span className={cx('product-old-price')}>{toVND.format(100000)}</span>
                                        <span className={cx('product-new-price')}> {toVND.format(product.price)}</span>
                                    </p>
                                </div>
                                <div className={cx('product-sale-off')}>
                                    <span>-10%</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
