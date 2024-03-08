import classNames from 'classnames/bind';
import styles from './CartPage.module.scss';
import { formatMoney } from '~/utils';
import React from 'react';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Summary() {
    const [toVND] = formatMoney;

    const inputPromote = {
        type: 'text',
        placeholder: 'Mã giảm giá ...',
        id: 'promote',
        name: 'promote',
    };

    return (
        <React.Fragment>
            <div className={cx('summary-container')}>
                <div className={cx('summary-title')}>Thanh Toán</div>
                <div className={cx('summary-promote')}>
                    <input className={cx('input-promote')} {...inputPromote} />
                    <button className={cx('btn-promote')}>NHẬP</button>
                </div>
                <div className={cx('summary-wrapper')}>
                    <div className={cx('summary-cost')}>
                        <p className={cx('summary-cost-detail')}>
                            Tiền vận chuyển:<span className="red-color">{toVND.format(30000)}</span>
                        </p>
                        <p className={cx('summary-cost-detail')}>
                            Giảm giá:<span className="red-color">{toVND.format(0)}</span>
                        </p>
                        <p className={cx('summary-cost-detail')}>
                            Tổng giá sản phẩm:<span className="red-color">{toVND.format(1000000)}</span>
                        </p>
                    </div>
                    <div className={cx('summary-total')}>
                        <p className={cx('summary-cost-detail')}>
                            Tổng thanh toán:
                            <span className={cx('summary-total-price') + ' red-color'}>{toVND.format(1030000)}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={cx('summary-btn-container')}>
                <Button primary className={cx('summary-btn')}>
                    Đặt Hàng
                </Button>
            </div>
        </React.Fragment>
    );
}

export default Summary;
