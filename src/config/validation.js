const userName = {
    label: 'Tên người dùng',
    type: 'text',
    placeholder: 'Nhập tên người dùng ...',
    id: 'userName',
    name: 'userName',
    validation: {
        required: {
            value: true,
            message: 'Đây là trường bắt buộc phải nhập ',
        },
        maxLength: {
            value: 30,
            message: 'Độ dài tối đa là 30 ký tự',
        },
    },
};

const email = {
    label: 'Email',
    type: 'text',
    placeholder: 'Nhập email ...',
    id: 'email',
    name: 'email',
    validation: {
        required: {
            value: true,
            message: 'Đây là trường bắt buộc phải nhập ',
        },
        pattern: {
            value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
            message: 'Email không đúng định dạng',
        },
    },
};

const address = {
    label: 'Địa chỉ',
    type: 'text',
    placeholder: 'Nhập địa chỉ...',
    id: 'address',
    name: 'address',
    validation: {
        required: {
            value: true,
            message: 'Đây là trường bắt buộc phải nhập ',
        },
        maxLength: {
            value: 100,
            message: 'Độ dài tối đa là 100 ký tự',
        },
    },
};

const phoneNumbers = {
    label: 'Số điện thoại',
    type: 'text',
    placeholder: 'Nhập số điện thoại ...',
    id: 'phoneNumbers',
    name: 'phoneNumbers',
    validation: {
        required: {
            value: true,
            message: 'Đây là trường bắt buộc phải nhập ',
        },
        pattern: {
            value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
            message: 'Số điện thoại không đúng định dạng ',
        },
    },
};

const password = {
    label: 'Mật khẩu',
    type: 'password',
    placeholder: 'Nhập mật khẩu ...',
    id: 'password',
    name: 'password',
    validation: {
        required: {
            value: true,
            message: 'Đây là trường bắt buộc phải nhập ',
        },
        pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message: 'Mật khẩu phải tối thiếu 8 ký tự và bao gồm 1 chữ hoa và chữ số ',
        },
    },
};

const confirmPassword = {
    label: 'Xác nhận mật khẩu',
    type: 'password',
    placeholder: 'Nhập mật khẩu đã nhập ...',
    id: 'confirmPassword',
    name: 'confirmPassword',
};

const description = {
    label: 'Miêu tả',
    type: 'text',
    placeholder: 'Nhập nội dung miêu tả ...',
    id: 'description',
    name: 'description',
    multiline: true,
    validation: {
        required: {
            value: true,
            message: 'Đây là trường bắt buộc phải nhập ',
        },
    },
};

const validation = {
    userName,
    email,
    address,
    phoneNumbers,
    password,
    confirmPassword,
    description,
};

export default validation;
