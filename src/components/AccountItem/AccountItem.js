import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const { name, imgUrl, price, slug } = data;
    return (
        <Link to={`/${slug}`}>
            <div className={cx('wrapper')}>
                <Image src={imgUrl} alt={imgUrl} className={cx('avatar')} />
                <div className={cx('info')}>
                    <p className={cx('name')}>
                        <span>{name}</span>
                    </p>
                    <span className={cx('username')}>{price}</span>
                </div>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
