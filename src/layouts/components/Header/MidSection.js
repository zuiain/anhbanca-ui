import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import ListImages from '~/assets/img';
import Image from '~/components/Image';
import Search from '~/layouts/components/Header/Search';

import { HeartIcon, CartIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function MidSection() {
    return (
        <div className={cx('mid-section')}>
            <div className={'grid wide'}>
                <div className={cx('inner-mid-section')}>
                    <Link to={'/'} className={cx('link-logo')}>
                        <Image src={ListImages.logo} alt="Ảnh logo" className={cx('logo')} />
                    </Link>
                    <Search />
                    <div className={cx('wishlist-cart')}>
                        <div className={cx('wishlist-cart-item')}>
                            <Link to={'/yeu-thich'}>
                                <HeartIcon className={cx('icon')} width="2.8rem" height="2.8rem" />
                                <span>Yêu thích</span>
                                <span className={cx('badge')}>9</span>
                            </Link>
                        </div>
                        <div className={cx('wishlist-cart-item')}>
                            <Link to={'/gio-hang'}>
                                <CartIcon className={cx('icon')} width="2.8rem" height="2.8rem" />
                                <span>Giỏ hàng</span>
                                <span className={cx('badge')}>14</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MidSection;
