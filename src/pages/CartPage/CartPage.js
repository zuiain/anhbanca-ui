import classNames from 'classnames/bind';
import styles from './CartPage.module.scss';
import { BasketIcon } from '~/components/Icons';
import { useState, useEffect } from 'react';
import { getService } from '~/services';
import CartProduct from './CartProduct';
import Summary from './Summary';

const cx = classNames.bind(styles);

function CartPage() {
    const [productsResult, setProductsResult] = useState([]);

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
        <div className={cx('container')}>
            <div className="grid wide">
                <div className={cx('title-wrapper')}>
                    <BasketIcon width="30px" height="30px" />
                    <span className={cx('title')}>Giỏ Hàng</span>
                </div>
                <div className={cx('cart-container')}>
                    <div className="row">
                        <div className="col l-9">
                            {productsResult.length > 0 && <CartProduct data={productsResult} />}
                        </div>
                        <div className="col l-3">
                            <Summary />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
