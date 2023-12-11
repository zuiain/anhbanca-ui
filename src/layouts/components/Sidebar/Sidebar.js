import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Filter from './Filter';
import HotProducts from './HotProducts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <Filter data={config.filter.searchPrice} searchName={'gia'} title="giá thành" />
            <Filter data={config.filter.supplier} searchName={'ncc'} title="nhà cung cấp" />
            <HotProducts title="sản phẩm bán chạy" />
        </div>
    );
}

export default Sidebar;
