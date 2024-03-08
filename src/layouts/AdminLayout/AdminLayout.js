import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AdminLayout.module.scss';

const cx = classNames.bind(styles);

function HeaderOnlyLayout() {
    return (
        <div className={cx('wrapper')}>
            <h1>Admin PAGE</h1>
            <div className={cx('container')}>
                <Outlet />
            </div>
        </div>
    );
}

export default HeaderOnlyLayout;
