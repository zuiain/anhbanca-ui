import classNames from 'classnames/bind';
import styles from './Breadcrumbs.module.scss';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { useEffect, useState } from 'react';
// import { getService } from '~/services';

const cx = classNames.bind(styles);

function Breadcrumbs({ productCategory, productName, title }) {
    const { category } = useParams();

    //const [detailCategoryResult, setDetailCategoryResult] = useState();

    // useEffect(() => {
    //     const fetchApi = async () => {
    //         const detailCategory = await getService.getDetailCategory(category);
    //         if (detailCategory === undefined) {
    //             alert('Error: No detail category found!');
    //         } else {
    //             setDetailCategoryResult(detailCategory);
    //         }
    //     };
    //     fetchApi();
    // }, []);

    const crumbQuery = title ? title : category;

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
