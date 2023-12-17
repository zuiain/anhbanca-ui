import classNames from 'classnames/bind';
import styles from './RegisterPage.module.scss';
import Popper from '~/components/Popper';
import Button from '~/components/Button';
import { Breadcrumbs } from '~/layouts/components';
import React from 'react';

const cx = classNames.bind(styles);

function RegisterPage() {
    return (
        <React.Fragment>
            <Breadcrumbs title="Đăng ký" />
            <div className="grid wide">
                <div className="row">
                    <div className="col l-o-3 l-6">
                        <div className={cx('wrapper')}>
                            <Popper>
                                <div className={cx('inner')}>
                                    <h3 className={'title-line-run '}>Tạo tài khoản</h3>
                                    <h4 className={cx('title-sub')}>Thông tin cá nhân</h4>

                                    <div className={cx('wrap-input')}>
                                        <div className={cx('wrap-input-right')}>
                                            <label className={cx('wrap-input-label')}>Tên người dùng</label>
                                            <input
                                                type="text"
                                                className={cx('wrap-input-text')}
                                                placeholder={'Nhập tên người dùng ...'}
                                            />
                                        </div>
                                        <div className={cx('wrap-input-left')}>
                                            <label className={cx('wrap-input-label')}>Email</label>
                                            <input
                                                type="text"
                                                className={cx('wrap-input-text')}
                                                placeholder={'Nhập email ...'}
                                            />
                                        </div>
                                    </div>

                                    <div className={cx('wrap-input')}>
                                        <div className={cx('wrap-input-right')}>
                                            <label className={cx('wrap-input-label')}>Địa chỉ</label>
                                            <input
                                                type="text"
                                                className={cx('wrap-input-text')}
                                                placeholder={'Nhập địa chỉ...'}
                                            />
                                        </div>
                                        <div className={cx('wrap-input-left')}>
                                            <label className={cx('wrap-input-label')}>Số điện thoại</label>
                                            <input
                                                type="text"
                                                className={cx('wrap-input-text')}
                                                placeholder={'Nhập số điện thoại ...'}
                                            />
                                        </div>
                                    </div>

                                    <div className={cx('wrap-input')}>
                                        <div className={cx('wrap-input-right')}>
                                            <label className={cx('wrap-input-label')}>Mật khẩu</label>
                                            <input
                                                type="text"
                                                className={cx('wrap-input-text')}
                                                placeholder={'Nhập mật khẩu ...'}
                                            />
                                        </div>
                                        <div className={cx('wrap-input-left')}>
                                            <label className={cx('wrap-input-label')}>Xác nhận mật khẩu</label>
                                            <input
                                                type="text"
                                                className={cx('wrap-input-text')}
                                                placeholder={'Nhập mật khẩu đã nhập ...'}
                                            />
                                        </div>
                                    </div>

                                    <Button className={cx('button')} primary>
                                        Đăng ký
                                    </Button>
                                </div>
                            </Popper>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default RegisterPage;
