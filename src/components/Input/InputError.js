import { motion } from 'framer-motion';
import { ErrorIcon } from '~/components/Icons';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function InputError({ message }) {
    return (
        <motion.p className={cx('input-error')} {...framer_error}>
            <ErrorIcon />
            <span className={cx('input-error-mess')}>{message}</span>
        </motion.p>
    );
}

const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
};

export default InputError;
