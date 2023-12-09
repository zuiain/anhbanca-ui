import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import Image from '~/components/Image';
import SlideShow from '~/layouts/components/SlideShow';
import ListImages from '~/assets/images';
import { SaleProducts } from '~/layouts/components';
import { getService } from '~/services';
import { FireIcon, NewIcon, FilterIcon, OxiIcon, FoodForFishIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function HomePage() {
    const [width, setWidth] = useState(window.innerWidth);
    const [percents, setPercents] = useState(20);

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

    return (
        <div className="grid wide">
            <SlideShow />
            <SaleProducts
                getFNC={getService.getSaleProducts}
                title={'SUPER SALE'}
                Icon={<FireIcon width="3rem" height="3rem" />}
                percents={percents}
                delay={3000}
            />
            <div className={cx('mid-banner')}>
                <div className={cx('mid-banner-left')}>
                    <Image src={ListImages.mid_banner_1} alt="dich-vu-be-ca" width="100%" height="100%" />
                </div>
                <div className={cx('mid-banner-right')}>
                    <Image src={ListImages.mid_banner_2} alt="tin-tuc-va-kien-thuc" width="100%" height="100%" />
                </div>
            </div>
            <SaleProducts
                getFNC={getService.getNewestProducts}
                title={'SẢN PHẨM MỚI'}
                Icon={<NewIcon width="30px" height="30px" title={'SẢN PHẨM MỚI'} />}
                percents={percents}
                isNew={true}
            />
            <SaleProducts
                getFNC={getService.getNewestProducts}
                title={'MÁY LỌC, MÁY BƠM, VẬT LIỆU LỌC'}
                Icon={<FilterIcon width="30px" height="30px" title={'MÁY LỌC, MÁY BƠM, VẬT LIỆU LỌC'} />}
                imgSrc={
                    'https://www.tfhmagazine.com/-/media/Project/OneWeb/TFH/US/articles/020_water_and_air_pumps.jpg'
                }
                percents={percents}
            />
            <SaleProducts
                getFNC={getService.getNewestProducts}
                title={'MÁY SỦI OXI, SƯỞI'}
                Icon={<OxiIcon width="30px" height="30px" title={'MÁY SỦI OXI, SƯỞI'} />}
                percents={percents}
            />
            <SaleProducts
                getFNC={getService.getNewestProducts}
                title={'THỨC ĂN CHO CÁ, TÉP'}
                Icon={<FoodForFishIcon width="30px" height="30px" title={'THỨC ĂN CHO CÁ, TÉP'} />}
                percents={percents}
            />
            <Image src={ListImages.banner} alt="Anh banner" className={cx('banner')}></Image>
        </div>
    );
}

export default HomePage;
