import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getService } from '~/services';
import { formatMoney } from '~/utils';
import styles from './Wishlist.module.scss';
import { TrashIcon, HeartIcon } from '~/components/Icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function WishlistPage() {
    const [productsResult, setProductsResult] = useState([]);
    const [toVND] = formatMoney;

    useEffect(() => {
        // get sale products
        const fetchApi = async () => {
            const products = await getService.getNewestProducts();
            if (products === undefined) {
                setProductsResult([]);
            } else if (products.length > 0) {
                setProductsResult(products);
            } else {
                setProductsResult([]);
                alert('No products found');
            }
        };
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={cx('wishlist-container')}>
            <h2 className={cx('wishlist-title-wrapper')}>
                <HeartIcon width="3rem" height="3rem" className={'red-color'} />
                <span className={cx('wishlist-title')}>Sản phẩm yêu thích</span>
            </h2>

            <div className="grid wide">
                <div className={cx('wishlist-wrapper')}>
                    <div className={cx('wishlist-title-container')}>
                        <div className="row">
                            <div className="col l-5">
                                <span className={'center-item ' + cx('wishlist-title-content')}>
                                    Thông Tin Sản Phẩm
                                </span>
                            </div>
                            <div className="col l-2">
                                <span className={'center-item ' + cx('wishlist-title-content')}>Trạng Thái</span>
                            </div>
                            <div className="col l-2">
                                <span className={'center-item ' + cx('wishlist-title-content')}>Giá Bán</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('wishlist-content')}>
                        {productsResult.map((product) => (
                            <div className={cx('product-detail')} key={product._id}>
                                <div className="row">
                                    <div className="col l-5">
                                        <Link to={`/${product.slug}`} className={cx('product-item')}>
                                            <div className="row">
                                                <div className="col l-4 center-item">
                                                    <div className={cx('product-img-wrapper')}>
                                                        <div
                                                            className={cx('product-img')}
                                                            style={{ backgroundImage: `url(${product.imgUrl})` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                                <div className="col l-8 ">
                                                    <div className={cx('product-name-wrapper')}>
                                                        <span className={cx('product-name')}>{product.name}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col l-2 center-item">
                                        {product.quantity > 0 ? (
                                            <p>
                                                <span className={cx('product-status-on')}> Còn hàng</span>
                                            </p>
                                        ) : (
                                            <p>
                                                <span className={cx('product-status-off')}> Liên hệ</span>
                                            </p>
                                        )}
                                    </div>
                                    <div className="col l-2 center-item">
                                        <span className={cx('product-price')}>{toVND.format(product.price)}</span>
                                    </div>
                                    <div className="col l-3 center-item ">
                                        <Link to={'/trang-chu'} className={cx('wishlist-add-btn')}>
                                            <Button primary>Thêm vào giỏ hàng</Button>
                                        </Link>
                                        <span className={'center-item ' + cx('wishlist-trash-icon')}>
                                            <TrashIcon width="3rem" height="3rem" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WishlistPage;
