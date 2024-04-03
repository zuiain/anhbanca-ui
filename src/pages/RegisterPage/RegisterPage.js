import React from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import styles from './RegisterPage.module.scss';
import Popper from '~/components/Popper';
import Button from '~/components/Button';
import Input from '~/components/Input';
import { Breadcrumbs } from '~/layouts/components';
import config from '~/config';

const cx = classNames.bind(styles);

function RegisterPage() {
    const {
        handleSubmit,
        watch,
        register,
        formState: { errors },
    } = useForm();
    const { userName, email, address, phoneNumbers, password, confirmPassword } = config.validation.accountValidation;
    //const _password = useRef();

    const passwordValue = watch(password.name, '');

    const handleOnSubmit = handleSubmit((data) => {
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

                                    <form onSubmit={(e) => e.preventDefault()} noValidate autoComplete="off">
                                        <div className={cx('wrap-input')}>
                                            <div className={cx('wrap-input-right')}>
                                                <Input {...userName} register={register} errors={errors} />
                                            </div>
                                            <div className={cx('wrap-input-left')}>
                                                <Input {...email} register={register} errors={errors} />
                                            </div>
                                        </div>

                                        <div className={cx('wrap-input')}>
                                            <div className={cx('wrap-input-right')}>
                                                <Input {...address} register={register} errors={errors} />
                                            </div>
                                            <div className={cx('wrap-input-left')}>
                                                <Input {...phoneNumbers} register={register} errors={errors} />
                                            </div>
                                        </div>

                                        <div className={cx('wrap-input')}>
                                            <div className={cx('wrap-input-right')}>
                                                <Input {...password} register={register} errors={errors} />
                                            </div>
                                            <div className={cx('wrap-input-left')}>
                                                <Input
                                                    {...confirmPassword}
                                                    register={register}
                                                    errors={errors}
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
                                        <Button className={cx('button')} primary onClick={handleOnSubmit}>
                                            Đăng ký
                                        </Button>
                                    </form>
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
