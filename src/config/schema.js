import * as z from 'zod';

export const productSchema = z.object({
    name: z
        .string({
            required_error: 'Đây là trường bắt buộc phải nhập !',
        })
        .min(3, { message: 'Tên sản phẩm không được dưới 3 ký tự !' })
        .max(200, { message: 'Tên sản phẩm không được quá 200 ký tự !' }),
    code: z.string(),
    quantity: z.number({
        required_error: 'Đây là trường bắt buộc phải nhập !',
        invalid_type_error: 'Vui lòng nhập số !',
    }),
    imPrice: z.number({
        required_error: 'Đây là trường bắt buộc phải nhập !',
        invalid_type_error: 'Vui lòng nhập số !',
    }),
    price: z.number({
        required_error: 'Đây là trường bắt buộc phải nhập !',
        invalid_type_error: 'Vui lòng nhập số !',
    }),
    note: z.string(),
    category: z.string({
        required_error: 'Đây là trường bắt buộc phải nhập !',
    }),
    brand: z.string({
        required_error: 'Đây là trường bắt buộc phải nhập !',
    }),
    supplier: z.string({
        required_error: 'Đây là trường bắt buộc phải nhập !',
    }),
});
