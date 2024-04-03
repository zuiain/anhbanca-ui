import classNames from 'classnames/bind';
import styles from './AdminNavbar.module.scss';

const cx = classNames.bind(styles);
function AdminNavbar() {
    return (
        <div className={cx('navbar')}>
            <div className={cx('navbar-wrapper')}>
                <div className={cx('nav-brand')}>ProductPage</div>
            </div>
        </div>
    );
}

export default AdminNavbar;
