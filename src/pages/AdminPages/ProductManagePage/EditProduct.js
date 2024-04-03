import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import classNames from 'classnames/bind';

import styles from './ProductManagePage.module.scss';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';
import Header from './Header';
import ValidateSelect from '~/components/ValidateSelect';
import { getService, postService, putService } from '~/services';
import HtmlEditor from './HtmlEditor';

const cx = classNames.bind(styles);

function EditProduct() {
    const { productName, productCode, productQuantity, productImPrice, productPrice, productNote } =
        config.inputProps.productInputProps;

    const { productSchema } = config.schema;

    const {
        control,
        register,
        formState,
        formState: { errors },
        handleSubmit,
        reset,
        setValue,
    } = useForm({
        mode: 'onBlur',
        resolver: zodResolver(productSchema),
    });

    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [product, setProduct] = useState();

    const { slug } = useParams();
    const isAddMode = !slug;

    const navigate = useNavigate();

    //get category
    useEffect(() => {
        const fetchApi = async () => {
            const res = await getService.getAllCategories();
            if (res === undefined) {
                setCategories([]);
            } else if (res.length > 0) {
                setCategories(res);
            } else {
                setCategories([]);
                alert('No category found');
            }
        };
        fetchApi();
    }, []);

    //get brand
    useEffect(() => {
        const fetchApi = async () => {
            const res = await getService.getAllBrands();
            if (res === undefined) {
                setBrands([]);
            } else if (res.length > 0) {
                setBrands(res);
            } else {
                setBrands([]);
                alert('No brand found');
            }
        };
        fetchApi();
    }, []);

    //get supplier
    useEffect(() => {
        const fetchApi = async () => {
            const res = await getService.getAllSuppliers();
            if (res === undefined) {
                setSuppliers([]);
            } else if (res.length > 0) {
                setSuppliers(res);
            } else {
                setSuppliers([]);
                alert('No supplier found');
            }
        };
        fetchApi();
    }, []);

    // get detail product
    useEffect(() => {
        const fetchApi = async () => {
            const product = await getService.getDetailProduct(slug);
            if (product === undefined) {
                toast.error('Không tìm thấy thông tin sản phẩm phù hợp !', {
                    toastId: 'errToast_1',
                });
            } else {
                const fields = [
                    'name',
                    'code',
                    'quantity',
                    'imPrice',
                    'price',
                    'note',
                    'category',
                    'brand',
                    'supplier',
                    'description',
                ];
                fields.forEach((field) => {
                    product[field] ? setValue(field, product[field]) : setValue(field, '');
                });
                setProduct(product);
            }
        };
        slug && fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug]);

    // create options data for select
    const createOptionsData = (data) => {
        return data.map((item) => {
            return { value: item.slug, label: item.name };
        });
    };

    // fnc create product
    const createProduct = (data) => {
        const fetchApi = async () => {
            const res = await postService.createProduct(data);
            if (res.status && res.status === 200) {
                toast.success('Thêm Sản Phẩm Thành Công !', {
                    toastId: 'successToast_1',
                });
            } else if (res.response.status && res.response.status === 409) {
                toast.error('Có lỗi khi tạo sản phẩm !', {
                    toastId: 'errToast_1',
                });
            }
        };
        fetchApi();
    };

    // fnc update product
    const updateProduct = (data) => {
        const fetchApi = async () => {
            const res = await putService.updateProduct(product._id, data);
            if (res.status && res.status === 200) {
                toast.success('Sửa Sản Phẩm Thành Công !', {
                    toastId: 'successToast_1',
                });
                navigate('/admin/san-pham');
            } else {
                toast.error('Có lỗi khi sửa sản phẩm !', {
                    toastId: 'errToast_1',
                });
            }
        };
        fetchApi();
    };

    //handle submit
    const onSubmit = (data) => {
        isAddMode ? createProduct(data) : updateProduct(data);
    };

    //reset form fields
    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formState, reset]);

    return (
        <div className="row">
            <div className="col l-12">
                <div className={cx('card')}>
                    <Header
                        title={isAddMode ? 'Thêm Sản Phẩm' : 'Sửa Sản Phẩm'}
                        btnTitle={'Danh Sách Sản Phẩm'}
                        href={'/admin/san-pham'}
                    />
                    <div className={cx('form-wrapper')}>
                        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off" id="edit-product-form">
                            <div className="row">
                                <div className="col l-4">
                                    <Input {...productName} register={register} errors={errors} />
                                </div>
                                <div className="col l-4">
                                    <Input {...productCode} register={register} errors={errors} />
                                </div>
                                <div className="col l-4">
                                    <Input
                                        {...productQuantity}
                                        type="number"
                                        register={register}
                                        errors={errors}
                                        valueAsNumber={true}
                                    />
                                </div>
                            </div>
                            <div className={cx('row-wrapper') + ' row'}>
                                <div className="col l-4">
                                    <Input
                                        {...productImPrice}
                                        type="number"
                                        register={register}
                                        errors={errors}
                                        valueAsNumber={true}
                                    />
                                </div>
                                <div className="col l-4">
                                    <Input
                                        {...productPrice}
                                        type="number"
                                        register={register}
                                        errors={errors}
                                        valueAsNumber={true}
                                    />
                                </div>
                                <div className="col l-4">
                                    <Input {...productNote} register={register} errors={errors} />
                                </div>
                            </div>
                            <div className={cx('row-wrapper') + ' row'}>
                                <div className="col l-4">
                                    <ValidateSelect
                                        label={'Loại Sản Phẩm'}
                                        labelRequire={true}
                                        controllerName={'category'}
                                        control={control}
                                        errors={errors}
                                        options={categories.length > 0 ? createOptionsData(categories) : []}
                                        errorMess={'Đây là trường bắt buộc phải chọn !'}
                                        placeholder={'Chọn Loại Sản Phẩm ...'}
                                    />
                                </div>
                                <div className="col l-4">
                                    <ValidateSelect
                                        label={'Nhãn Hàng Sản Phẩm'}
                                        labelRequire={true}
                                        controllerName={'brand'}
                                        id={'brand'}
                                        control={control}
                                        errors={errors}
                                        options={brands.length > 0 ? createOptionsData(brands) : []}
                                        errorMess={'Đây là trường bắt buộc phải chọn !'}
                                        placeholder={'Chọn Nhãn Hàng Sản Phẩm ...'}
                                    />
                                </div>
                                <div className="col l-4">
                                    <ValidateSelect
                                        label={'Nhà Cung Cấp Sản Phẩm'}
                                        labelRequire={true}
                                        controllerName={'supplier'}
                                        control={control}
                                        errors={errors}
                                        options={suppliers.length > 0 ? createOptionsData(suppliers) : []}
                                        errorMess={'Đây là trường bắt buộc phải chọn !'}
                                        placeholder={'Chọn Nhà Cung Cấp Sản PHẩm ...'}
                                    />
                                </div>
                            </div>
                            <div className={cx('row-wrapper', { row: true })}>
                                <div className={cx('col l-12')}>
                                    <HtmlEditor
                                        height={window.innerHeight > 730 ? 450 : 250}
                                        control={control}
                                        controllerName={'description'}
                                    />
                                </div>
                            </div>
                            <div className={cx('row-wrapper') + ' row'}>
                                <div className="col l-o-10 l-2">
                                    <div className={cx('btn-wrapper')}>
                                        <Button primary className={cx('btn-add')} type="submit">
                                            {isAddMode ? 'Thêm Sản Phẩm' : 'Sửa Sản Phẩm'}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProduct;
