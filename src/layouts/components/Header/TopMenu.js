import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import { PhoneIcon, LocationIcon, LoginIcon, RegisterIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function TopMenu() {
    return (
        <div className={cx('top-menu')}>
            <div className={'grid wide'}>
                <div className={cx('inner-menu')}>
                    <div className={cx('left-menu')}>
                        <span className={cx('tittle')}>
                            <PhoneIcon className={cx('phone-icon')} /> 035 279 4245
                            <LocationIcon className={cx('location-icon')} /> 27 ngõ 29 Phúc Tân, Hoàn Kiếm, Hà Nội
                        </span>
                    </div>
                    <div className={cx('right-menu')}>
                        <Button text to={'/dang-nhap'} leftIcon={<LoginIcon />}>
                            <span className={cx('tittle')}>Đăng nhập</span>
                        </Button>
                        <Button text to={'/dang-ky'} leftIcon={<RegisterIcon />}>
                            <span className={cx('tittle')}>Đăng ký</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopMenu;
