import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './SaleProducts.module.scss';
import { formatMoney } from '~/utils';
import { LeftButtonIcon, RightButtonIcon } from '~/components/Icons';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function SaleProducts({ imgSrc, Icon, title, percents = 20, delay, isNew = false, limit = 5, getFNC = () => {} }) {
    const [productsResult, setProductsResult] = useState([]);
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const [toVND] = formatMoney;

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    const handleLeftButtonClick = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? productsResult.length - limit : prevIndex - 1));
    };
    const handleRightButtonClick = () => {
        setIndex((preIndex) => (preIndex === productsResult.length - limit ? 0 : preIndex + 1));
    };

    useEffect(() => {
        // get sale products
        const fetchApi = async () => {
            const products = await getFNC();
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

    useEffect(() => {
        // set index products list
        if (delay) {
            resetTimeout();
            timeoutRef.current = setTimeout(
                () => setIndex((prevIndex) => (prevIndex === productsResult.length - limit ? 0 : prevIndex + 1)),
                delay,
            );
        }

        return () => {
            resetTimeout();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    return (
        <div className={cx('sale')}>
            <div className={cx('sale-title')}>
                <span className={cx('sale-title-icon')}>{Icon}</span>
                {title}
            </div>
            {imgSrc && (
                <div className={cx('sale-img')}>
                    <Image src={imgSrc} alt={'ẢNH BANNER'} width="100%" height="250px" />
                </div>
            )}
            <div className={'row no-gutters ' + cx('sale-row')}>
                <div className={cx('sale-products')} style={{ transform: `translate3d(${-index * percents}%, 0, 0)` }}>
                    {productsResult.length > 0 &&
                        productsResult.map((product) => (
                            <div className="col l-2-4 m-4" key={product._id}>
                                <Link to={`/${product.slug}`} className={cx('sale-item')}>
                                    <div
                                        className={cx('sale-item-img')}
                                        style={{ backgroundImage: `url(${product.imgUrl})` }}
                                    ></div>
                                    <div className={cx('sale-item-detail')}>
                                        <p className={cx('sale-item-name')}>{product.name}</p>
                                        <p className={cx('sale-item-price')}>
                                            <span className={cx('sale-item-new-price')}>
                                                {toVND.format(product.price)}
                                            </span>
                                            <span className={cx('sale-item-last-price')}>
                                                {toVND.format(product.price)}
                                            </span>
                                        </p>
                                    </div>
                                    <div className={cx('sale-item-sale-off')}>{isNew ? 'New' : '-10%'} </div>
                                </Link>
                            </div>
                        ))}
                </div>
                <div className={cx('left-button')} onClick={handleLeftButtonClick}>
                    <LeftButtonIcon width="3.5rem" height="3.5rem" />
                </div>
                <div className={cx('right-button')} onClick={handleRightButtonClick}>
                    <RightButtonIcon width="3.5rem" height="3.5rem" />
                </div>
            </div>
        </div>
    );
}

SaleProducts.propTypes = {
    imgSrc: PropTypes.string,
    percents: PropTypes.number,
    delay: PropTypes.number,
    limit: PropTypes.number,
    Icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    getFNC: PropTypes.func.isRequired,
    isNew: PropTypes.bool,
};

export default SaleProducts;
