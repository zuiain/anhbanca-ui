import classNames from 'classnames/bind';
import styles from './Input.module.scss';
import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import ErrorMess from '../ErrorMess/ErrorMess';

const cx = classNames.bind(styles);

function Input({
    label,
    labelRequire = false,
    type,
    id,
    name,
    className,
    placeholder,
    value,
    multiline = false,
    register,
    errors,
    valueAsNumber,
    ...props
}) {
    const checkError = errors[name] ? true : false;

    const classes = cx('container', { error: checkError, [className]: className });

    return (
        <div className={cx('wrapper')}>
            {label && (
                <div className={cx('label')}>
                    <label htmlFor={id}>{label}</label>
                    {labelRequire && <span className={cx('label-re')}>(*)</span>}
                </div>
            )}
            {multiline ? (
                <textarea
                    id={id}
                    name={name}
                    type={type}
                    className={cx(classes, 'text-area')}
                    placeholder={placeholder}
                    {...register(name)}
                    {...props}
                ></textarea>
            ) : (
                <input
                    id={id}
                    name={name}
                    type={type}
                    className={classes}
                    placeholder={placeholder}
                    value={value}
                    {...register(name, { valueAsNumber })}
                    {...props}
                />
            )}
            <AnimatePresence mode="wait" initial={false}>
                {checkError && <ErrorMess message={errors[name].message} key={errors[name].message} />}
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
