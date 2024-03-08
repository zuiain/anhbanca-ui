import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Images from '~/assets/img';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, className, fallback = Images.noImage, ...props }, ref) => {
    const [errImgSrc, setErrImgSrc] = useState('');
    return (
        <img
            className={cx('wrapper', { [className]: className })}
            ref={ref}
            src={errImgSrc || src}
            alt={alt}
            onError={() => setErrImgSrc(fallback)}
            {...props}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
