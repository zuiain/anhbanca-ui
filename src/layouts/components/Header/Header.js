import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import TopMenu from './TopMenu';
import MidSection from './MidSection';
import Navigation from './Navigation';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <TopMenu />
            <MidSection />
            <Navigation />
        </div>
    );
}

export default Header;
