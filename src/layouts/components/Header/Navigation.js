import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import Category from './Category';
import styles from './Header.module.scss';
import { HomeIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Navigation() {
    return (
        <div className={cx('navigation')}>
            <div className={'grid wide'}>
                <div className={cx('inner-navigation')}>
                    <ul className={cx('navigation-list')}>
                        <li className={cx('navigation-item')}>
                            <NavLink to={'/'} className={(nav) => cx('title', { active: nav.isActive })}>
                                <HomeIcon width="2.4rem" height="2.4rem" />
                            </NavLink>
                        </li>
                        <Category className={'navigation-item-category'} />
                        <li className={cx('navigation-item')}>
                            <NavLink
                                to={'/loai-san-pham/phu-kien-thuy-sinh'}
                                className={(nav) => cx('title', { active: nav.isActive })}
                            >
                                Phụ kiện thủy sinh
                            </NavLink>
                        </li>
                        <li className={cx('navigation-item')}>
                            <NavLink
                                to={'/loai-san-pham/ca&tep-canh'}
                                className={(nav) => cx('title', { active: nav.isActive })}
                            >
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

export default Navigation;
