import classNames from 'classnames/bind';

import styles from './HomePage.module.scss';
import Image from '~/components/Image';
import SlideShow from '~/layouts/components/SlideShow';
import Images from '~/assets/images';
import { SaleProducts } from '~/layouts/components';

const cx = classNames.bind(styles);

function HomePage() {
    return (
        <div className="grid wide">
            <SlideShow />
            <Image src={Images.banner} alt="Anh banner" className={cx('banner')}></Image>
            <SaleProducts />
        </div>
    );
}

export default HomePage;
