import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { Header } from '~/layouts/components/';
import { Breadcrumbs } from '~/layouts/components';
const cx = classNames.bind(styles);

function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Breadcrumbs />
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-3">
                            <div className={cx('sidebar')}>sidebar</div>
                        </div>
                        <div className="col l-9">
                            <div className={cx('content')}>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
                s {/* </div> */}
            </div>
        </div>
    );
}

export default DefaultLayout;
