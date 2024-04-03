import classNames from 'classnames/bind';
import { toast } from 'react-toastify';
import styles from './Modal.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function DeleteModal({ title, data, delFunction, setOpenModal, setCheckDeleteSuccess }) {
    const handleOnclickCancel = () => {
        setOpenModal(false);
    };

    const handleOnclickDlt = async () => {
        const res = await delFunction(data._id);
        if (res.status && res.status === 200) {
            toast.success('Xóa Sản Phẩm Thành Công !');
            setOpenModal(false);
            setCheckDeleteSuccess(true);
        } else {
            toast.error('Có lỗi khi xóa sản phẩm !');
        }
    };

    return (
        <div className={cx('container')}>
            <div className={cx('title-wrapper')}>
                <div className={cx('title')}>{title}</div>
                <span className={cx('dismiss-btn')} onClick={handleOnclickCancel}>
                    X
                </span>
            </div>
            <div className={cx('content')}>
                <p>
                    Bạn có chắc muốn xóa sản phẩm <span>{data.name}</span>
                </p>
            </div>
            <div className={cx('btn-wrapper')}>
                <Button primary small onClick={handleOnclickDlt} className={cx('btn-del')}>
                    Xóa
                </Button>
                <Button outline small onClick={handleOnclickCancel}>
                    Hủy
                </Button>
            </div>
        </div>
    );
}

export default DeleteModal;
