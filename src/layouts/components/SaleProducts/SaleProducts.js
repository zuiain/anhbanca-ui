import classNames from 'classnames/bind';
import styles from './SaleProducts.module.scss';
import { useEffect, useState } from 'react';
import { getService } from '~/services';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function SaleProducts() {
    const [productsResult, setProductsResult] = useState([]);

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    useEffect(() => {
        const fetchApi = async () => {
            const products = await getService.getSaleProducts();
            console.log(products);
            if (products.length > 0) {
                setProductsResult(products);
            } else {
                alert('No products found');
            }
        };

        fetchApi();
    }, []);

    return (
        <div className={cx('sale')}>
            <div className={cx('sale-title')}>TOP SẢN PHẨM BÁN CHẠY</div>
            <div className="row sm-gutter">
                <div className={cx('sale-products')}>
                    {productsResult.length > 0 &&
                        productsResult.map((product) => (
                            <div className="col l-2-4 " key={product._id}>
                                <Link to={`/product/${product.slug}`} className={cx('sale-item')}>
                                    <div
                                        className={cx('sale-item-img')}
                                        style={{ backgroundImage: `url(${product.imgUrl})` }}
                                    ></div>
                                    <div className={cx('sale-item-detail')}>
                                        <p className={cx('sale-item-name')}>{product.name}</p>
                                        <p className={cx('sale-item-price')}>
                                            <span className={cx('sale-item-new-price')}>
                                                {VND.format(product.price)}
                                            </span>
                                            <span className={cx('sale-item-last-price')}>
                                                {VND.format(product.price)}
                                            </span>
                                        </p>
                                    </div>
                                    <div className={cx('sale-item-sale-off')}>-10%</div>
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default SaleProducts;
