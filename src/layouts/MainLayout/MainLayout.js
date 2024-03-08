import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';
import { Header, Footer } from '~/layouts/components';
const cx = classNames.bind(styles);

function HeaderOnlyLayout() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default HeaderOnlyLayout;
