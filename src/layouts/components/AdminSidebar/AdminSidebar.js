import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AdminSidebar.module.scss';
import ListImages from '~/assets/img';
import { HeartIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function AdminSidebar() {
    const { logo_small } = ListImages;

    const list_nav = [
        {
            link: '/admin',
            icon: <HeartIcon width="2.5rem" height="2.5rem" />,
            name: 'Dashboard',
            active: true,
        },
        { link: '/admin/san-pham', icon: <HeartIcon width="2.5rem" height="2.5rem" />, name: 'Quản Lý Sản Phẩm' },
        { icon: <HeartIcon width="2.5rem" height="2.5rem" />, name: 'Dashboard' },
    ];

    return (
        <div className={cx('container')}>
            <div className={cx('account-container')}>
                <Link to="/admin" className={cx('img-wrapper')}>
                    <div className={cx('img')} style={{ backgroundImage: `url(${logo_small})` }}></div>
                </Link>
                <div className={cx('account-name')}>Duy Anh</div>
            </div>
            <div className={cx('sidebar-wrapper')}>
                <ul className={cx('nav')}>
                    {list_nav.map((item, index) => (
                        <li key={index} className={cx(item.active && 'active')}>
                            <Link to={item.link} className={cx('nav-item')}>
                                {item.icon}
                                <span className={cx('icon')}></span>
                                <p>{item.name}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AdminSidebar;
