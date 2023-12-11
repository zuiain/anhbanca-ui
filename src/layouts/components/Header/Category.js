import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import { a } from 'react-router-dom';
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
                            <a href={'/loai-san-pham/may-loc-may-bom-vat-lieu-loc'}>
                                <FilterIcon className={cx('category-menu-icon')} />
                                Máy Lọc, Máy Bơm, Vật Liệu Lọc
                            </a>
                        </li>
                        <li className={cx('category-menu-item')}>
                            <a href={'/loai-san-pham/may-sui-oxi-suoi'}>
                                <OxiIcon className={cx('category-menu-icon')} />
                                Máy Sủi Oxi, Sưởi
                            </a>
                        </li>
                        <li className={cx('category-menu-item')}>
                            <a href={'/loai-san-pham/phan-nen-cot-nen'}>
                                <AquaSoilIcon className={cx('category-menu-icon')} />
                                Phân Nền, Cốt Nền Thủy Sinh
                            </a>
                        </li>
                        <li className={cx('category-menu-item')}>
                            <a href={'/loai-san-pham/phu-kien-thuy-sinh'}>
                                <AquaGadgetIcon className={cx('category-menu-icon')} />
                                Phụ Kiện Dành Cho Thủy Sinh
                            </a>
                        </li>
                        <li className={cx('category-menu-item')}>
                            <a href={'/loai-san-pham/thuc-an-cho-ca-tep-canh'}>
                                <FoodForFishIcon className={cx('category-menu-icon')} />
                                Thức Ăn Cho Cá/Tép
                            </a>
                        </li>
                        <li className={cx('category-menu-item')}>
                            <a href={'/loai-san-pham/thuoc-danh-cho-thuy-sinh'}>
                                <AquaMedicineIcon className={cx('category-menu-icon')} />
                                Thuốc Dành Cho Thủy Sinh
                            </a>
                        </li>
                        <li className={cx('category-menu-item')}>
                            <a href={'/loai-san-pham/cay-thuy-sinh'}>
                                <AquaPlant className={cx('category-menu-icon')} />
                                Cây Thủy Sinh
                            </a>
                        </li>
                        <li className={cx('category-menu-item')}>
                            <a href={'/loai-san-pham/ca-canh'}>
                                <FishIcon className={cx('category-menu-icon')} /> Cá Cảnh
                            </a>
                        </li>
                        <li className={cx('category-menu-item')}>
                            <a href={'/loai-san-pham/tep-canh'}>
                                <ShrimpIcon className={cx('category-menu-icon')} />
                                Tép Cảnh
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        >
            <li className={'prevent-select ' + cx({ [className]: className })}>
                <p className={cx('title')}>Danh mục sản phẩm</p>
            </li>
        </Tippy>
    );
}

ListCategory.propTypes = {
    classNames: PropTypes.string,
};

export default ListCategory;
