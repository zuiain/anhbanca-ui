import classNames from 'classnames/bind';
import styles from './LoginPage.module.scss';
import Popper from '~/components/Popper';
import Button from '~/components/Button';
import { Breadcrumbs } from '~/layouts/components';
import React, { useId } from 'react';
import { Link } from 'react-router-dom';
import Input from '~/components/Input';
import { FormProvider, useForm } from 'react-hook-form';
import config from '~/config';

const cx = classNames.bind(styles);

function LoginPage() {
    const { userName, password } = config.validation.accountValidation;
    const checkboxId = useId();
    const methods = useForm();

    const handleSubmit = methods.handleSubmit((data) => {
        console.log(data);
    });

    return (
        <React.Fragment>
            <Breadcrumbs title="Đăng nhập" />
            <div className="grid wide">
                <div className="row">
                    <div className="col l-o-4 l-4">
                        <div className={cx('wrapper')}>
                            <Popper>
                                <div className={cx('inner')}>
                                    <h3 className={'title-line-run '}>Đăng nhập</h3>
                                    <h4 className={cx('title-sub')}>Thông tin đăng nhập</h4>
                                    <FormProvider {...methods}>
                                        <form onSubmit={(e) => e.preventDefault()} autoComplete="off" noValidate>
                                            <div className={cx('wrap-input')}>
                                                <Input {...userName} />
                                            </div>
                                            <div className={cx('wrap-input')}>
                                                <Input {...password} />
                                            </div>
                                            <div className={cx('wrap-input')}>
                                                <div className={cx('wrap-remember-forget')}>
                                                    <div className={cx('wrap-remember')}>
                                                        <input
                                                            type="checkbox"
                                                            className={cx('wrap-remember-checkbox')}
                                                            id={checkboxId}
                                                        />
                                                        <label htmlFor={checkboxId}>Lưu tài khoản</label>
                                                    </div>
                                                    <div className={cx('wrap-forget')}>
                                                        <Link to={'/quen-tai-khoan'} className={cx('wrap-forget-link')}>
                                                            Quên tài khoản
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button className={cx('button')} primary onClick={handleSubmit}>
                                                Đăng nhập
                                            </Button>
                                        </form>
                                    </FormProvider>
                                </div>
                            </Popper>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LoginPage;
