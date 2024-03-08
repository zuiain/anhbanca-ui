import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import styles from './RegisterPage.module.scss';
import Popper from '~/components/Popper';
import Button from '~/components/Button';
import Input from '~/components/Input';
import { Breadcrumbs } from '~/layouts/components';
import config from '~/config';

const cx = classNames.bind(styles);

function RegisterPage() {
    const methods = useForm();
    const { userName, email, address, phoneNumbers, password, confirmPassword } = config.validation;
    //const _password = useRef();
    const passwordValue = methods.watch(password.name, '');

    const handleSubmit = methods.handleSubmit((data) => {
        console.log(data);
    });

    return (
        <React.Fragment>
            <Breadcrumbs title="Đăng ký" />
            <div className="grid wide">
                <div className="row">
                    <div className="col l-o-2 l-8">
                        <div className={cx('wrapper')}>
                            <Popper>
                                <div className={cx('inner')}>
                                    <h3 className={'title-line-run '}>Tạo tài khoản</h3>
                                    <h4 className={cx('title-sub')}>Thông tin cá nhân</h4>
                                    <FormProvider {...methods}>
                                        <form onSubmit={(e) => e.preventDefault()} noValidate autoComplete="off">
                                            <div className={cx('wrap-input')}>
                                                <div className={cx('wrap-input-right')}>
                                                    <Input {...userName} />
                                                </div>
                                                <div className={cx('wrap-input-left')}>
                                                    <Input {...email} />
                                                </div>
                                            </div>

                                            <div className={cx('wrap-input')}>
                                                <div className={cx('wrap-input-right')}>
                                                    <Input {...address} />
                                                </div>
                                                <div className={cx('wrap-input-left')}>
                                                    <Input {...phoneNumbers} />
                                                </div>
                                            </div>

                                            <div className={cx('wrap-input')}>
                                                <div className={cx('wrap-input-right')}>
                                                    <Input {...password} />
                                                </div>
                                                <div className={cx('wrap-input-left')}>
                                                    <Input
                                                        {...confirmPassword}
                                                        validation={{
                                                            required: {
                                                                value: true,
                                                                message: 'Đây là trường bắt buộc phải nhập ',
                                                            },
                                                            validate: (value) =>
                                                                value === passwordValue ||
                                                                'Mật khẩu xác nhận không trùng với mật khẩu',
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <Button className={cx('button')} primary onClick={handleSubmit}>
                                                Đăng ký
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

export default RegisterPage;
