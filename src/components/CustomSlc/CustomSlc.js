import classNames from 'classnames/bind';
import styles from './CustomSlc.module.scss';
import { useFormContext } from 'react-hook-form';
import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import SelectError from './SelectError';

const cx = classNames.bind(styles);

function CustomSlc({ label, labelRequire = false, id, className, name, validation, data, value, onChange }) {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const checkError = errors[name] ? true : false;

    const classes = cx('container', { error: checkError, [className]: className });

    let currentValue = value || '';

    return (
        <div className={cx('wrapper')}>
            {label && (
                <div className={cx('label')}>
                    <label htmlFor={name}>{label}</label> {labelRequire && <span className={cx('label-re')}>(*)</span>}
                </div>
            )}
            <select
                className={classes}
                name={name}
                id={id}
                defaultValue={''}
                value={currentValue}
                {...register(name, validation)}
                onChange={onChange}
            >
                <option value="" disabled>
                    Mặc định
                </option>
                {data &&
                    data.length > 0 &&
                    data.map((item, index) => (
                        <option key={index} value={item.slug}>
                            {item.name}
                        </option>
                    ))}
            </select>
            <AnimatePresence mode="wait" initial={false}>
                {checkError && <SelectError message={errors[name].message} key={errors[name].message} />}
            </AnimatePresence>
        </div>
    );
}

CustomSlc.propTypes = {
    label: PropTypes.string,
    labelRequire: PropTypes.bool,
    id: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    defaultValue: PropTypes.string,
    data: PropTypes.array.isRequired,
    validation: PropTypes.object,
};

export default CustomSlc;
