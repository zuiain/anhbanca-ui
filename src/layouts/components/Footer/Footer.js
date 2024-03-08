import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import { LocationIcon, PhoneIcon, EmailIcon } from '~/components/Icons';
import ListImages from '~/assets/img';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <div className={'row ' + cx('container')}>
                    <div className="col l-4">
                        <div className={cx('title')}>THÔNG TIN LIÊN HỆ</div>
                        <div className={cx('content', { info: true })}>
                            <p className={cx('content-detail')}>
                                <span className={cx('content-detail-icon')}>
                                    <LocationIcon width="1.8rem" height="1.8rem" />
                                </span>
                                27 ngõ 29 Phúc Tân, Hoàn Kiếm, Hà Nội
                            </p>
                            <p className={cx('content-detail')}>
                                <span className={cx('content-detail-icon')}>
                                    <PhoneIcon width="1.8rem" height="1.8rem" />
                                </span>
                                035 279 4245
                            </p>
                            <p className={cx('content-detail')}>
                                <span className={cx('content-detail-icon')}>
                                    <EmailIcon width="1.8rem" height="1.8rem" />
                                </span>
                                anhbanca97@gmail.com
                            </p>
                            <Image src={ListImages.logo} alt="Ảnh Banner" heigh="30px" width="250px" />
                        </div>
                    </div>
                    <div className="col l-4">
                        <div className={cx('title')}>HƯỚNG DẪN</div>
                        <div className={cx('content')}>
                            <Link to={'/huong-dan-mua-hang'} className={cx('content-link')}>
                                Hướng dẫn mua hàng
                            </Link>
                            <Link to={'/huong-dan-thanh-toan'} className={cx('content-link')}>
                                Hướng dẫn thanh toán
                            </Link>
                            <Link to={'/huong-dan-giao-nhan'} className={cx('content-link')}>
                                Hướng dẫn giao nhận
                            </Link>
                            <Link to={'/dieu-khoan-dich-vu'} className={cx('content-link')}>
                                Điều khoản dịch vụ
                            </Link>
                        </div>
                        <div className={cx('title')}>CHẤP NHẬN THANH TOÁN</div>
                        <div className={cx('content')}>
                            <Image
                                src="//bizweb.dktcdn.net/thumb/thumb/100/344/954/themes/705100/assets/method_image_1.png?1672232161194"
                                alt="ẢNH Footer"
                                width="50px"
                                height="32px"
                            ></Image>
                            <Image
                                src="//bizweb.dktcdn.net/thumb/thumb/100/344/954/themes/705100/assets/method_image_2.png?1672232161194"
                                alt="ẢNH FOOTER"
                                width="50px"
                                height="32px"
                            ></Image>
                            <Image
                                src="//bizweb.dktcdn.net/thumb/thumb/100/344/954/themes/705100/assets/method_image_3.png?1672232161194"
                                alt="ẢNH FOOTER"
                                width="50px"
                                height="32px"
                            ></Image>
                            <Image
                                src="//bizweb.dktcdn.net/thumb/thumb/100/344/954/themes/705100/assets/method_image_4.png?1672232161194"
                                alt="ẢNH FOOTER"
                                width="50px"
                                height="32px"
                            ></Image>
                        </div>
                    </div>
                    <div className="col l-4">
                        <div className={cx('title')}>CHÍNH SÁCH</div>
                        <div className={cx('content')}>
                            <Link to={'/chinh-sach-quy-dinh-chung'} className={cx('content-link')}>
                                Chính sách & Quy định chung
                            </Link>
                            <Link to={'/chinh-sach-bao-mat-thong-tin'} className={cx('content-link')}>
                                Chính sách bảo mật thông tin
                            </Link>
                            <Link to={'/chinh-sach-van-chuyen-giao-nhan'} className={cx('content-link')}>
                                Chính sách vận chuyển và giao nhận
                            </Link>
                            <Link to={'/chinh-sach-doi-tra-hang-hoan-tien'} className={cx('content-link')}>
                                Chính sách đổi trả hàng và hoàn tiền
                            </Link>
                        </div>
                        <div className={cx('title')}>CHĂM SÓC KHÁCH HÀNG</div>
                        <div className={cx('content')}>
                            <div className={cx('content-detail', { hotline: true })}>
                                <span className={cx('content-detail-phone-icon')}>
                                    <span className={cx('phone-icon')}>
                                        <PhoneIcon width="2.7rem" height="2.7rem" className={cx('osc-rotation')} />
                                    </span>
                                </span>
                                <span className={cx('content-hotline')}>035 279 4245</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
