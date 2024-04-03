import classNames from 'classnames/bind';
import styles from './ProductManagePage.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header({ title, href, btnTitle }) {
    return (
        <div className={cx('card-header')}>
            <div className={cx('card-title')}>{title}</div>
            <Button primary className={cx('btn')} to={href}>
                {btnTitle}
            </Button>
        </div>
    );
}

export default Header;
