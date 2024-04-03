import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './ProductManagePage.module.scss';
import Modal from '~/components/Modal';
import DeleteModal from '~/components/Modal/DeleteModal';
import Header from './Header';
import Pagination from '~/layouts/components/Pagination';
import { formatMoney } from '~/utils';
import { FixIcon, TrashIcon } from '~/components/Icons';
import { getService, deleteService } from '~/services';
import Search from './Search';

const cx = classNames.bind(styles);

function ListProduct() {
    const [toVND] = formatMoney;
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(7);
    const [productsResult, setProductsResult] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [product, setProduct] = useState({});
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    const [categoryResult, setCategoryResult] = useState([]);
    const [brandResult, setBrandResult] = useState([]);
    const [supplierResult, setSupplierResult] = useState([]);
    const [checkDeleteSuccess, setCheckDeleteSuccess] = useState(false);

    // set window height
    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // set page size based on window height
    useEffect(() => {
        if (windowHeight > 730) {
            setPageSize(12);
        } else {
            setPageSize(7);
        }
    }, [windowHeight]);

    // get category
    useEffect(() => {
        const fetchApi = async () => {
            const res = await getService.getAllCategories();
            if (res === undefined) {
                setCategoryResult([]);
            } else if (res.length > 0) {
                setCategoryResult(res);
            } else {
                setCategoryResult([]);
                alert('No category found');
            }
        };
        fetchApi();
    }, []);

    // get brand
    useEffect(() => {
        const fetchApi = async () => {
            const res = await getService.getAllBrands();
            if (res === undefined) {
                setBrandResult([]);
            } else if (res.length > 0) {
                setBrandResult(res);
            } else {
                setBrandResult([]);
                alert('No brand found');
            }
        };
        fetchApi();
    }, []);

    // get supplier
    useEffect(() => {
        const fetchApi = async () => {
            const res = await getService.getAllSuppliers();
            if (res === undefined) {
                setSupplierResult([]);
            } else if (res.length > 0) {
                setSupplierResult(res);
            } else {
                setSupplierResult([]);
                alert('No brand found');
            }
        };
        fetchApi();
    }, []);

    // set table data
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return productsResult.slice(firstPageIndex, lastPageIndex);
    }, [pageSize, currentPage, productsResult]);

    // onclick delete button
    const handleOnclick = (product) => {
        setOpenModal(true);
        setProduct(product);
    };

    // fnc delete product
    const deleteProduct = async (id) => {
        const res = await deleteService.deleteProduct(id);
        return res;
    };

    // transform slug type of product to name type of product
    const handleName = (arr, productInfo) => {
        const res = arr.find((item) => item.slug === productInfo);
        return res && res.name;
    };

    return (
        <div>
            {openModal && (
                <Modal
                    children={
                        <DeleteModal
                            title={'Xóa Sản Phẩm'}
                            setOpenModal={setOpenModal}
                            setCheckDeleteSuccess={setCheckDeleteSuccess}
                            data={product}
                            delFunction={deleteProduct}
                        />
                    }
                />
            )}
            <div className="row">
                <div className="col l-12">
                    <div className={cx('card')}>
                        <Header title={'Danh Sách Sản Phẩm'} btnTitle={'Thêm Sản Phẩm'} href={'/admin/san-pham/them'} />
                        <Search
                            checkDeleteSuccess={checkDeleteSuccess}
                            setCheckDeleteSuccess={setCheckDeleteSuccess}
                            setCurrentPage={setCurrentPage}
                            setProductsResult={setProductsResult}
                        />
                        <div className={cx('card-body')}>
                            <table className={cx('table')}>
                                <thead className={cx('thead')}>
                                    <tr>
                                        <th>Tên Sản Phẩm</th>
                                        <th>Mã Sản Phẩm</th>
                                        <th>Loại Sản Phẩm</th>
                                        <th>Nhãn Hàng</th>
                                        <th>Nhà Cung Cấp</th>
                                        <th>Số Lượng</th>
                                        <th>Giá</th>
                                        <th className="center-item">Thao Tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentTableData.length > 0 &&
                                        currentTableData.map((product, index) => (
                                            <tr key={index}>
                                                <td className="fixed-width-30-percent">{product.name}</td>
                                                <td className={cx('center')}>{product.code}</td>
                                                <td>
                                                    {categoryResult.length > 0 &&
                                                        handleName(categoryResult, product.category)}
                                                </td>
                                                <td>
                                                    {brandResult.length > 0 && handleName(brandResult, product.brand)}
                                                </td>
                                                <td>
                                                    {supplierResult.length > 0 &&
                                                        handleName(supplierResult, product.supplier)}
                                                </td>
                                                <td>{product.quantity}</td>
                                                <td>{toVND.format(product.price)}</td>
                                                <td className="center-item">
                                                    <Link to={'/admin/san-pham/' + product.slug}>
                                                        <span className={cx('icon')}>
                                                            <FixIcon />
                                                        </span>
                                                    </Link>
                                                    <span className={cx('icon')} onClick={() => handleOnclick(product)}>
                                                        <TrashIcon />
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                        <div className={cx('pagination')}>
                            <Pagination
                                className="pagination-bar"
                                currentPage={currentPage}
                                totalCount={productsResult.length}
                                pageSize={pageSize}
                                onPageChange={(page) => setCurrentPage(page)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListProduct;
