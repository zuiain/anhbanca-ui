import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import {
    FilterIcon,
    OxiIcon,
    AquaSoilIcon,
    AquaGadgetIcon,
    FoodForFishIcon,
    AquaMedicineIcon,
    AquaPlant,
    FishIcon,
    ShrimpIcon,
} from '~/components/Icons';
const cx = classNames.bind(styles);

function ListCategory({ className }) {
    return (
        <Tippy
            appendTo={() => document.body}
            interactive
            placement="bottom"
            render={(attrs) => (
                <div className={cx('category-menu')} tabIndex="-1" {...attrs}>
                    <ul className={cx('category-menu-list')}>
                        <li className={cx('category-menu-item')}>
                            <Link to={'/my-loc-may-bom-vat-lieu-loc'}>
                                <FilterIcon className={cx('category-menu-icon')} />
                                Máy Lọc, Máy Bơm, Vật Liệu Lọc
                            </Link>
                        </li>
                        <li className={cx('category-menu-item')}>
                            <Link to={'/my-sui-oxi-suoi'}>
                                <OxiIcon className={cx('category-menu-icon')} />
                                Máy Sủi Oxi, Sưởi
                            </Link>
                        </li>
                        <li className={cx('category-menu-item')}>
                            <Link to={'/my-loc-vat-lieu-loc'}>
                                <AquaSoilIcon className={cx('category-menu-icon')} />
                                Phân Nền, Cốt Nền Thủy Sinh
                            </Link>
                        </li>
                        <li className={cx('category-menu-item')}>
                            <Link to={'/phu-kien-thuy-sinh'}>
                                <AquaGadgetIcon className={cx('category-menu-icon')} />
                                Phụ Kiện Dành Cho Thủy Sinh
                            </Link>
                        </li>
                        <li className={cx('category-menu-item')}>
                            <Link to={'/thuc-an-cho-ca-tep-canh'}>
                                <FoodForFishIcon className={cx('category-menu-icon')} />
                                Thức Ăn Cho Cá/Tép
                            </Link>
                        </li>
                        <li className={cx('category-menu-item')}>
                            <Link to={'/thuoc-chua-benh-cho-ca-tep-canh'}>
                                <AquaMedicineIcon className={cx('category-menu-icon')} />
                                Thuốc Dành Cho Thủy Sinh
                            </Link>
                        </li>
                        <li className={cx('category-menu-item')}>
                            <Link to={'/cay-thuy-sinh'}>
                                <AquaPlant className={cx('category-menu-icon')} />
                                Cây Thủy Sinh
                            </Link>
                        </li>
                        <li className={cx('category-menu-item')}>
                            <Link to={'/ca-canh'}>
                                <FishIcon className={cx('category-menu-icon')} /> Cá Cảnh
                            </Link>
                        </li>
                        <li className={cx('category-menu-item')}>
                            <Link to={'/tep-canh'}>
                                <ShrimpIcon className={cx('category-menu-icon')} />
                                Tép Cảnh
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        >
            <li className={cx({ [className]: className })}>
                <NavLink to={'/danh-muc'} className={(nav) => cx('title', { active: nav.isActive })}>
                    Danh mục sản phẩm
                </NavLink>
            </li>
        </Tippy>
    );
}

ListCategory.propTypes = {
    classNames: PropTypes.string,
};

export default ListCategory;
