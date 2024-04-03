import classNames from 'classnames/bind';
import styles from './CartPage.module.scss';
import { useState } from 'react';
import { formatMoney } from '~/utils';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function CartProduct({ data }) {
    const [inputValue, setInputValue] = useState(1);
    const [toVND] = formatMoney;

    const handleMinus = () => {
        if (inputValue > 1) {
            setInputValue((pre) => pre - 1);
        }
    };

    const handlePlus = () => {
        setInputValue((pre) => pre + 1);
    };

    return (
        <div className={cx('cart-product')}>
            <div className={cx('cart-product-title')}>
                <div className="row">
                    <div className="col l-6 ">
                        <div className={cx('cart-title')}>Thông Tin Sản Phẩm</div>
                    </div>
                    <div className="col l-2 ">
                        <div className={cx('cart-title')}>Đơn Giá</div>
                    </div>
                    <div className="col l-2 ">
                        <div className={cx('cart-title')}>Số Lượng</div>
                    </div>
                    <div className="col l-2 ">
                        <div className={cx('cart-title')}>Thành Tiền</div>
                    </div>
                </div>
            </div>
            <div className={cx('cart-product-info')}>
                {data.map((product) => (
                    <div className={cx('product-info')} key={product.id}>
                        <div className="row">
                            <div className="col l-2">
                                <Link to={`/${product.slug}`} className={cx('product-img-link')}>
                                    <div className={cx('product-img-wrapper')}>
                                        <div
                                            className={cx('product-img')}
                                            style={{ backgroundImage: `url(${product.imgUrl})` }}
                                        ></div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col l-4">
                                <div className={cx('product-name-wrapper')}>
                                    <Link to={`/${product.slug}`}>
                                        <div className={cx('product-name')}>{product.name}</div>
                                    </Link>
                                    <p className={cx('product-status')}>
                                        Tình trạng:
                                        {product.quantity > 0 ? (
                                            <span className={cx('product-status-on')}> Còn hàng</span>
                                        ) : (
                                            <span className={cx('product-status-off')}> Liên hệ</span>
                                        )}
                                    </p>
                                </div>
                            </div>
                            <div className="col l-2">
                                <div className={cx('product-price')}>{toVND.format(product.price)}</div>
                            </div>
                            <div className="col l-2">
                                <div className={cx('product-quantity')}>
                                    <button className={cx('product-quantity-btn')} onClick={handleMinus}>
                                        -
                                    </button>
                                    <input className={cx('product-quantity-input')} type="text" disabled value={1} />
                                    <button className={cx('product-quantity-btn')} onClick={handlePlus}>
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="col l-2">
                                <div className={cx('product-price')}>{toVND.format(product.price)}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

CartProduct.propTypes = {
    data: PropTypes.array,
};

export default CartProduct;
