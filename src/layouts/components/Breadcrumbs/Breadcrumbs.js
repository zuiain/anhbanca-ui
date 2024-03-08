import classNames from 'classnames/bind';
import styles from './Breadcrumbs.module.scss';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function Breadcrumbs({ productCategory, productName, title }) {
    const { category } = useParams();
    let _title;

    switch (category) {
        case 'may-loc-may-bom-vat-lieu-loc':
            _title = 'Máy Lọc, Máy Bơm, Vật Liệu Lọc';
            break;
        case 'may-sui-oxi-suoi':
            _title = 'Máy Sủi, Oxi, Sưởi';
            break;
        case 'phan-nen-cot-nen':
            _title = 'Phân Nền, Cốt Nền Thủy Sinh';
            break;
        case 'phu-kien-thuy-sinh':
            _title = 'Phụ Kiện Thủy Sinh';
            break;
        case 'thuc-an-cho-ca-tep-canh':
            _title = 'Máy Lọc, Máy Bơm, Vật Liệu Lọc';
            break;
        case 'thuoc-danh-cho-thuy-sinh':
            _title = 'Thuốc Dành Cho Thủy Sinh';
            break;
        case 'cay-thuy-sinh':
            _title = 'Cây Thủy Sinh';
            break;
        case 'ca-canh':
            _title = 'Các Loại Cá Cảnh';
            break;
        case 'tep-canh':
            _title = 'Các Loại Tép Cảnh';
            break;
        case 'ca&tep-canh':
            _title = 'Các Loại Cá Và Tép Cảnh';
            break;
        default:
            _title = 'Tiêu Đề';
            break;
    }

    const crumbQuery = title ? title : _title;

    return (
        <div className={cx('breadcrumbs')}>
            <div className="grid wide">
                <div className={cx('crumb')}>
                    <Link to="/">Trang chủ</Link>
                </div>
                {productCategory ? (
                    <div className={cx('crumb')}>
                        <Link to={`/loai-san-pham/${productCategory}`}>{productCategory}</Link>
                    </div>
                ) : (
                    <div className={'prevent-select ' + cx('crumb')}>
                        <Link>{crumbQuery}</Link>
                    </div>
                )}
                {productName && <div className={'prevent-select ' + cx('crumb')}>{productName}</div>}
            </div>
        </div>
    );
}

Breadcrumbs.propTypes = {
    productCategory: PropTypes.string,
    productName: PropTypes.string,
    title: PropTypes.string,
};

export default Breadcrumbs;
