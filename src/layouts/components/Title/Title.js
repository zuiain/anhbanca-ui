import classNames from 'classnames/bind';
import styles from './Title.module.scss';
import { useParams } from 'react-router-dom';
const cx = classNames.bind(styles);
function Title() {
    const { category } = useParams();
    let title = category;
    switch (category) {
        case 'may-loc-may-bom-vat-lieu-loc':
            title = 'Máy Lọc, Máy Bơm, Vật Liệu Lọc';
            break;
        case 'may-sui-oxi-suoi':
            title = 'Máy Sủi, Oxi, Sưởi';
            break;
        case 'phan-nen-cot-nen':
            title = 'Phân Nền, Cốt Nền Thủy Sinh';
            break;
        case 'phu-kien-thuy-sinh':
            title = 'Phụ Kiện Dành Cho Thủy Sinh';
            break;
        case 'thuc-an-cho-ca-tep-canh':
            title = 'Máy Lọc, Máy Bơm, Vật Liệu Lọc';
            break;
        case 'thuoc-danh-cho-thuy-sinh':
            title = 'Thuốc Dành Cho Thủy Sinh';
            break;
        case 'cay-thuy-sinh':
            title = 'Cây Thủy Sinh';
            break;
        case 'ca-canh':
            title = 'Các Loại Cá Cảnh';
            break;
        case 'tep-canh':
            title = 'Các Loại Tép Cảnh';
            break;
        case 'ca&tep-canh':
            title = 'Các Loại Cá Và Tép Cảnh';
            break;
        default:
            title = '';
            break;
    }

    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <div className="row">
                    <div className="col l-12">
                        <div className={'prevent-select ' + cx('content')}>
                            <p className={'prevent-select ' + cx('name')}>{title}</p>
                            Đây là mô tả về loại sản phẩm sẽ được lấy ra từ CSDL chứ đếu ai tự ghi vào. Đây là mô tả về
                            loại sản phẩm sẽ được lấy ra từ CSDL chứ đếu ai tự ghi vào. Đây là mô tả về loại sản phẩm sẽ
                            được lấy ra từ CSDL chứ đếu ai tự ghi vào. Đây là mô tả về loại sản phẩm sẽ được lấy ra từ
                            CSDL chứ đếu ai tự ghi vào.Đây là mô tả về loại sản phẩm sẽ được lấy ra từ CSDL chứ đếu ai
                            tự ghi vào.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Title;
