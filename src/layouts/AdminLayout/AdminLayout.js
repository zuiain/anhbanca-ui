import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AdminLayout.module.scss';
import AdminSidebar from '~/layouts/components/AdminSidebar';
import React from 'react';
import AdminNavbar from '../components/AdminNavbar';

const cx = classNames.bind(styles);

function AdminLayout() {
    return (
        <React.Fragment>
            <AdminSidebar />
            <div className={cx('container')}>
                <AdminNavbar />
                <div className={cx('content')}>
                    <Outlet />
                </div>
            </div>
        </React.Fragment>
    );
}

export default AdminLayout;
