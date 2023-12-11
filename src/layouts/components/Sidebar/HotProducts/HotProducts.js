import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './HotProducts.module.scss';
import { getService } from '~/services';
import Image from '~/components/Image';
import { formatMoney } from '~/utils';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function HotProducts({ title }) {
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
            <div className={cx('title')}>{title}</div>
            <div className={cx('content')}>
                {productsResult.length > 0 &&
                    productsResult.map((product, index) => (
                        <Link to={`/${product.slug}`} key={index}>
                            <div className={cx('product-content')}>
                                <div className={cx('product-img')}>
                                    <Image src={product.imgUrl} width="100%" height="100%" />
                                </div>
                                <div className={cx('product-title')}>
                                    <div className={cx('product-name')}>{product.name}</div>
                                    <div className={cx('product-price')}>{toVND.format(product.price)}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
}

export default HotProducts;
