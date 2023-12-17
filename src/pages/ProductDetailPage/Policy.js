import classNames from 'classnames/bind';
import parse from 'html-react-parser';
import React from 'react';
import styles from './ProductDetailPage.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Policy() {
    const policyArr = [
        {
            src: '//bizweb.dktcdn.net/100/344/954/themes/705100/assets/po1.png?1672231215561',
            title: 'giao hàng tận nơi',
            content: 'Liên kết với những hãng giao hàng uy tín, nhanh chóng, đảm bảo.',
        },
        {
            src: '//bizweb.dktcdn.net/100/344/954/themes/705100/assets/po2.png?1672231215561',
            title: 'thanh toán khi nhận hàng',
            content: 'Bạn thoải mái nhận và kiểm tra hàng trước khi trả tiền.',
        },
        {
            src: '//bizweb.dktcdn.net/100/344/954/themes/705100/assets/po3.png?1672231215561',
            title: 'đổi trả nếu sản phẩm bị lỗi',
            content: 'Dễ dàng đổi sản phẩm khác nếu sản phẩm bị lỗi do nhà sản xuất hoặc đơn vị vận chuyển.',
        },
        {
            src: '//bizweb.dktcdn.net/100/344/954/themes/705100/assets/po4.png?1672231215561',
            title: 'Bảo hành chính hãng',
            content: 'Sản phẩm chính hãng đến từ các thương hiệu uy tín',
        },
        {
            src: '//bizweb.dktcdn.net/100/344/954/themes/705100/assets/po5.png?1672231215561',
            title: 'Tư vấn mua hàng online',
            content: `Gọi ngay <span className='phone-number'>035 279 4245</span> để mua và đặt hàng nhanh chóng.`,
        },
    ];

    return (
        <React.Fragment>
            <div className={'prevent-select ' + cx('introduce')}>
                <div className="title-line-run">Giới thiệu sản phẩm</div>
                <div className={cx('introduce-content')}>
                    Đây là giới thiệu ngắn ngọn về sản phẩm sẽ được lấy từ trong CSDL. Đây là giới thiệu ngắn ngọn về
                    sản phẩm sẽ được lấy từ trong CSDL. Đây là giới thiệu ngắn ngọn về sản phẩm sẽ được lấy từ trong
                    CSDL. Đây là giới thiệu ngắn ngọn về sản phẩm sẽ được lấy từ trong CSDL. Đây là giới thiệu ngắn ngọn
                    về sản phẩm sẽ được lấy từ trong CSDL. Đây là giới thiệu ngắn ngọn về sản phẩm sẽ được lấy từ trong
                    CSDL. Đây là giới thiệu ngắn ngọn về sản phẩm sẽ được lấy từ trong CSDL. Đây là giới thiệu ngắn ngọn
                    về sản phẩm sẽ được lấy từ trong CSDL. Đây là giới thiệu ngắn ngọn về sản phẩm sẽ được lấy từ trong
                    CSDL. Đây là giới thiệu ngắn ngọn về sản phẩm sẽ được lấy từ trong CSDL. Đây là giới thiệu ngắn ngọn
                    về sản phẩm sẽ được lấy từ trong CSDL. Đây là giới thiệu ngắn ngọn về sản phẩm sẽ được lấy từ trong
                    CSDL. Đây là giới thiệu ngắn ngọn về sản phẩm sẽ được lấy từ trong CSDL.
                </div>
            </div>
            <div className={'prevent-select ' + cx('policy')}>
                <div className="title-line-run">Chính sách</div>
                <div className={cx('policy-content')}>
                    {policyArr.map((item, index) => (
                        <div className={cx('policy-item')} key={index}>
                            <div className={cx('policy-img')}>
                                <Image width="100%" height="100%" alt="Ảnh policy" src={item.src} />
                            </div>
                            <div className={cx('policy-detail')}>
                                <p className={cx('policy-detail-title')}>{item.title}</p>
                                <p className={cx('policy-detail-content')}>{parse(item.content)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Policy;
