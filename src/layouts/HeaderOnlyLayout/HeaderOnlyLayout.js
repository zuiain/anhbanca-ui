import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './HeaderOnlyLayout.module.scss';
import Header from '~/layouts/components/Header';
const cx = classNames.bind(styles);

function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Outlet />
            </div>
        </div>
    );
}

export default DefaultLayout;
