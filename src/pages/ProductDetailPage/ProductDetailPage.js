import classNames from 'classnames/bind';
import styles from './ProductDetailPage.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getService } from '~/services';
import { NewIcon } from '~/components/Icons';
import InfoProduct from './InfoProduct';
import { Breadcrumbs, SaleProducts } from '~/layouts/components';
import React from 'react';
import Description from './Description';
import Policy from './Policy';

const cx = classNames.bind(styles);

function ProductDetail() {
    const { slug } = useParams();
    const [width, setWidth] = useState(window.innerWidth);
    const [percents, setPercents] = useState(20);
    const [detailProductResult, setDetailProductResult] = useState();

    //const [detailCategoryResult, setDetailCategoryResult] = useState();

    useEffect(() => {
        if (width > 1024) {
            setPercents(20);
        } else if (width >= 740 && width <= 1024) {
            setPercents(33.33333);
        }

        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width]);

    useEffect(() => {
        const fetchApi = async () => {
            const detailProduct = await getService.getDetailProduct(slug);
            if (detailProduct === undefined) {
                alert('Error: No detail product found!');
            } else {
                setDetailProductResult(detailProduct);
            }
        };

        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug]);

    // useEffect(() => {
    //     if (detailProductResult) {
    //         const fetchApi = async () => {
    //             const detailCategory = await getService.getDetailCategory(detailProductResult.category);
    //             if (detailCategory === undefined) {
    //                 alert('Error: No detail product found!');
    //             } else {
    //                 setDetailCategoryResult(detailCategory);
    //             }
    //         };

    //         fetchApi();
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    return (
        <React.Fragment>
            {detailProductResult && (
                <Breadcrumbs productCategory={detailProductResult.category} productName={detailProductResult.name} />
            )}
            <div className="grid wide">
                <div className={cx('wrapper')}>
                    <div className="row">
                        {detailProductResult && (
                            <div className="col l-9">
                                <InfoProduct data={detailProductResult} />
                                <Description data={detailProductResult.description} />
                            </div>
                        )}
                        <div className="col l-3">
                            <Policy />
                        </div>
                    </div>

                    <SaleProducts
                        getFNC={getService.getNewestProducts}
                        title={'SẢN PHẨM MỚI'}
                        Icon={<NewIcon width="30px" height="30px" title={'SẢN PHẨM MỚI'} />}
                        percents={percents}
                        isNew={true}
                        delay={3000}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProductDetail;
