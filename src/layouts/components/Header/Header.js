import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import ListImages from '~/assets/images';
import Button from '~/components/Button';
import Image from '~/components/Image';
import Search from '~/layouts/components/Search';
import { NavLink } from 'react-router-dom';
import Category from './Category';
import { PhoneIcon, LocationIcon, LoginIcon, RegisterIcon, HeartIcon, CartIcon, HomeIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-menu')}>
                <div className={cx('inner-menu')}>
                    <div className={cx('left-menu')}>
                        <span className={cx('tittle')}>
                            <PhoneIcon className={cx('phone-icon')} /> 035 279 4245
                            <LocationIcon className={cx('location-icon')} /> 27 ngõ 29 Phúc Tân, Hoàn Kiếm, Hà Nội
                        </span>
                    </div>
                    <div className={cx('right-menu')}>
                        <Button text to={'/login'} leftIcon={<LoginIcon />}>
                            <span className={cx('tittle')}>Đăng nhập</span>
                        </Button>
                        <Button text to={'/register'} leftIcon={<RegisterIcon />}>
                            <span className={cx('tittle')}>Đăng ký</span>
                        </Button>
                    </div>
                </div>
            </div>
            <div className={cx('mid-section')}>
                <Image src={ListImages.logo} alt="Ảnh logo" className={cx('logo')} />
                <Search />
                <div className={cx('wishlist-cart')}>
                    <div className={cx('wishlist-cart-item')}>
                        <HeartIcon className={cx('icon')} width="2.8rem" height="2.8rem" />
                        <span>Yêu thích</span>
                        <span className={cx('badge')}>9</span>
                    </div>
                    <div className={cx('wishlist-cart-item')}>
                        <CartIcon className={cx('icon')} width="2.8rem" height="2.8rem" />
                        <span>Giỏ hàng</span>
                        <span className={cx('badge')}>14</span>
                    </div>
                </div>
            </div>
            <div className={cx('navigation')}>
                <div className={cx('inner-navigation')}>
                    <ul className={cx('navigation-list')}>
                        <li className={cx('navigation-item')}>
                            <NavLink to={'/'} className={(nav) => cx('title', { active: nav.isActive })}>
                                <HomeIcon width="2.4rem" height="2.4rem" />
                            </NavLink>
                        </li>
                        <Category className={'navigation-item-category'} />
                        <li className={cx('navigation-item')}>
                            <NavLink to={'/phu-kien'} className={(nav) => cx('title', { active: nav.isActive })}>
                                Phụ kiện bể cá
                            </NavLink>
                        </li>
                        <li className={cx('navigation-item')}>
                            <NavLink to={'/ca-tep-canh'} className={(nav) => cx('title', { active: nav.isActive })}>
                                Cá/ Tép cảnh
                            </NavLink>
                        </li>
                        <li className={cx('navigation-item')}>
                            <NavLink to={'/bai-viet'} className={(nav) => cx('title', { active: nav.isActive })}>
                                Kiến thức thủy sinh
                            </NavLink>
                        </li>
                        <li className={cx('navigation-item')}>
                            <NavLink to={'/lien-he'} className={(nav) => cx('title', { active: nav.isActive })}>
                                Liên hệ
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
