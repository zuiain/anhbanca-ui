import classNames from 'classnames/bind';
import styles from './Input.module.scss';
import { useFormContext } from 'react-hook-form';
//import { findInputError, isFormInvalid } from '~/utils';
import InputError from './InputError';
import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Input({ label, type, id, className, placeholder, name, validation, multiline = false }) {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const checkError = errors[name] ? true : false;

    const classes = cx('container', { error: checkError, [className]: className });

    return (
        <div className={cx('wrapper')}>
            {label && (
                <div className={cx('label')}>
                    <label htmlFor={id}>{label}</label>
                </div>
            )}
            {multiline ? (
                <textarea
                    id={id}
                    type={type}
                    className={cx(classes, 'text-area')}
                    placeholder={placeholder}
                    {...register(name, validation)}
                ></textarea>
            ) : (
                <input
                    id={id}
                    type={type}
                    className={classes}
                    placeholder={placeholder}
                    {...register(name, validation)}
                />
            )}
            <AnimatePresence mode="wait" initial={false}>
                {checkError && <InputError message={errors[name].message} key={errors[name].message} />}
            </AnimatePresence>
        </div>
    );
}

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    id: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    validation: PropTypes.object,
    multiline: PropTypes.bool,
};

export default Input;
