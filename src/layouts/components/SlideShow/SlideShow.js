import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SlideShow.module.scss';
import { LeftButtonIcon, RightButtonIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const imgBanner = [
    { imgSrc: 'https://bizweb.dktcdn.net/100/344/954/themes/705100/assets/slider_image_1.png?1672232161194' },
    { imgSrc: 'https://bizweb.dktcdn.net/100/344/954/themes/705100/assets/slider_image_2.png?1672232161194' },
    { imgSrc: 'https://bizweb.dktcdn.net/100/344/954/themes/705100/assets/slider_image_3.png?1672232161194' },
    { imgSrc: 'https://bizweb.dktcdn.net/100/344/954/themes/705100/assets/slider_image_4.png?1672232161194' },
    { imgSrc: 'https://bizweb.dktcdn.net/100/344/954/themes/705100/assets/slider_image_5.png?1672232161194' },
];

function SlideShow({ delay = 2500 }) {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();

        timeoutRef.current = setTimeout(
            () => setIndex((prevIndex) => (prevIndex === imgBanner.length - 1 ? 0 : prevIndex + 1)),
            delay,
        );

        return () => {
            resetTimeout();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    return (
        <div className={cx('slideshow')}>
            <div className={cx('slideshowSlider')} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {imgBanner.map(({ imgSrc }, index) => {
                    return (
                        <div className={cx('slide')} key={index} style={{ backgroundImage: `url(${imgSrc})` }}></div>
                    );
                })}
            </div>

            <div
                className={cx('left-button')}
                onClick={() => {
                    setIndex((prevIndex) => (prevIndex === 0 ? imgBanner.length - 1 : prevIndex - 1));
                }}
            >
                <LeftButtonIcon width="3.5rem" height="3.5rem" />
            </div>

            <div
                className={cx('right-button')}
                onClick={() => {
                    setIndex((preIndex) => (preIndex === imgBanner.length - 1 ? 0 : preIndex + 1));
                }}
            >
                <RightButtonIcon width="3.5rem" height="3.5rem" />
            </div>

            <div className={cx('slideshowDots')}>
                {imgBanner.map((_, idx) => (
                    <div
                        key={idx}
                        className={cx('slideshowDot', { active: index === idx })}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

SlideShow.propTypes = {
    delay: PropTypes.number,
};

export default SlideShow;
