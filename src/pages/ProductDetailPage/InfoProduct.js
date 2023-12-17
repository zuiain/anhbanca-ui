import { useState } from 'react';
import { formatMoney } from '~/utils';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ProductDetailPage.module.scss';
import Button from '~/components/Button';
import { BagIcon, CartIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function InfoProduct({ data }) {
    let checkBrand, checkAvailability;
    const [toVND] = formatMoney;
    const [inputValue, setInputValue] = useState(1);

    if (data) {
        checkBrand = data.brand === 'khong-co' ? false : true;
        checkAvailability = data.quantity > 0 ? 'Còn hàng' : 'Liên hệ';
    }

    const handleMinus = () => {
        if (inputValue > 1) {
            setInputValue((pre) => pre - 1);
        }
    };

    const handlePlus = () => {
        setInputValue((pre) => pre + 1);
    };

    return (
        <div className="row">
            <div className="col l-6">
                <div className={cx('info-img')} style={{ backgroundImage: `url(${data.imgUrl})` }}></div>
            </div>
            <div className="col l-6">
                <div className={cx('info-name')}>{data.name}</div>
                <div className={cx('line')}></div>
                <div className={cx('info')}>
                    <div className={cx('info-item')}>
                        <label className={cx('info-title')}>Mã sản phẩm:</label>
                        <span className={cx('info-content')}>{data.code}</span>
                    </div>
                    {checkBrand && (
                        <div className={cx('info-item')}>
                            <label className={cx('info-title')}>Hãng:</label>
                            <span className={cx('info-content')}>{data.brand}</span>
                        </div>
                    )}
                    <div className={cx('info-item')}>
                        <label className={cx('info-title')}>Tình trạng:</label>
                        <span className={cx('info-content', { availability: true })}>{checkAvailability}</span>
                    </div>
                    <div className={cx('info-item')}>
                        <label className={cx('info-price')}>{toVND.format(data.price)}</label>
                    </div>
                    <div className={cx('info-item', { quantity: true })}>
                        <label className={cx('info-title')}>Số lượng:</label>
                        <div className={cx('info-quantity')}>
                            <button className={cx('info-quantity-btn')} onClick={handleMinus}>
                                -
                            </button>
                            <input className={cx('info-quantity-input')} type="text" value={inputValue} disabled />
                            <button className={cx('info-quantity-btn')} onClick={handlePlus}>
                                +
                            </button>
                        </div>
                    </div>
                    <div className={cx('info-item', { description_cart: true })}>
                        <Button leftIcon={<CartIcon />} primary className={cx('info-btn')}>
                            THÊM VÀO GIỎ HÀNG
                        </Button>
                    </div>
                    <div className={cx('info-item')}>
                        <Button leftIcon={<BagIcon />} primary className={cx('info-btn')}>
                            MUA NGAY
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

InfoProduct.propTypes = {
    data: PropTypes.object.isRequired,
};

export default InfoProduct;
