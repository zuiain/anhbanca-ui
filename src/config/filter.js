const searchPrice = [
    { title: 'Giá dưới 500.000đ', value: '<500000', checked: false },
    { title: '500.000 - 1.000.000đ', value: '>500000AND<1000000', checked: false },
    { title: '1.000.000 - 2.000.000đ', value: '>1000000AND<2000000', checked: false },
    { title: '2.000.000 - 3.000.000đ', value: '>2000000AND<3000000', checked: false },
    { title: '3.000.000 - 5.000.000đ', value: '>3000000AND<5000000', checked: false },
    { title: 'Giá trên 5.000.000đ', value: '>5000000', checked: false },
];

const supplier = [
    { title: 'ADA', value: 'ADA', checked: false },
    { title: 'sunsun', value: 'sunsun', checked: false },
    { title: 'Atman', value: 'Atman', checked: false },
    { title: 'Periha', value: 'Periha', checked: false },
    { title: 'ADA', value: 'ADA', checked: false },
    { title: 'sunsun', value: 'sunsun', checked: false },
    { title: 'Atman', value: 'Atman', checked: false },
    { title: 'Periha', value: 'Periha', checked: false },
];

const sort = [
    { title: 'Mặc định', value: '' },
    { title: 'Giá Tăng Dần', value: 'price-asc' },
    { title: 'Giá Giảm Dần', value: 'price-desc' },
    { title: 'Từ A-Z', value: 'name-asc' },
    { title: 'Từ Z-A', value: 'name-desc' },
    { title: 'Cũ đến mới', value: 'created_on-asc' },
    { title: 'Mới đến cũ', value: 'created_on-desc' },
];

const filter = {
    searchPrice,
    supplier,
    sort,
};

export default filter;
