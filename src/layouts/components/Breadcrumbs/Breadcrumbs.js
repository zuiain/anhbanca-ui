import classNames from 'classnames/bind';
import styles from './Breadcrumbs.module.scss';
import { Link, useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function Breadcrumbs() {
    const { category } = useParams();
    const lastCrumb = category;
    let crumbName;

    switch (lastCrumb) {
        case 'may-loc-may-bom-vat-lieu-loc':
            crumbName = 'Máy Lọc, Máy Bơm, Vật Liệu Lọc';
            break;
        case 'may-sui-oxi-suoi':
            crumbName = 'Máy Sủi, Oxi, Sưởi';
            break;
        case 'phan-nen-cot-nen':
            crumbName = 'Phân Nền, Cốt Nền Thủy Sinh';
            break;
        case 'phu-kien-thuy-sinh':
            crumbName = 'Phụ Kiện Dành Cho Thủy Sinh';
            break;
        case 'thuc-an-cho-ca-tep-canh':
            crumbName = 'Máy Lọc, Máy Bơm, Vật Liệu Lọc';
            break;
        case 'thuoc-danh-cho-thuy-sinh':
            crumbName = 'Thuốc Dành Cho Thủy Sinh';
            break;
        case 'cay-thuy-sinh':
            crumbName = 'Cây Thủy Sinh';
            break;
        case 'ca-canh':
            crumbName = 'Các Loại Cá Cảnh';
            break;
        case 'tep-canh':
            crumbName = 'Các Loại Tép Cảnh';
            break;
        case 'ca&tep-canh':
            crumbName = 'Các Loại Cá Và Tép Cảnh';
            break;
        default:
            crumbName = 'Tiêu Đề';
            break;
    }

    return (
        <div className={cx('breadcrumbs')}>
            <div className="grid wide">
                <div className={cx('crumb')}>
                    <Link to="/">Trang chủ</Link>
                </div>
                <div className={'prevent-select ' + cx('crumb')}>
                    <Link to={`/loai-san-pham/${lastCrumb}`}>{crumbName}</Link>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumbs;
