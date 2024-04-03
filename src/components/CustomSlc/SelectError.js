import { motion } from 'framer-motion';
import { ErrorIcon } from '~/components/Icons';
import classNames from 'classnames/bind';
import styles from './Select.module.scss';

const cx = classNames.bind(styles);

function SelectError({ message }) {
    return (
        <motion.p className={cx('slc-error')} {...framer_error}>
            <ErrorIcon />
            <span className={cx('slc-error-mess')}>{message}</span>
        </motion.p>
    );
}

const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
};

export default SelectError;
