import classNames from 'classnames/bind';
import styles from './RegisterPage.module.scss';

const cx = classNames.bind(styles);

function RegisterPage() {
    return (
        <div className="grid wide">
            <div className="row">
                <div className="col l-o-3 l-6">
                    <div className={cx('wrapper')}></div>
                    <h3>Tạo tài khoản</h3>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
