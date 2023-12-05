import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { Header } from '~/layouts/components/';
const cx = classNames.bind(styles);

function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('sidebar')}>sidebar</div>
                <div className={cx('content')}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
