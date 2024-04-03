import { Controller } from 'react-hook-form';
import { AnimatePresence } from 'framer-motion';
import classNames from 'classnames/bind';

import styles from './ValidateSelect.module.scss';
import Select from 'react-select';
import ErrorMess from '~/components/ErrorMess';

const cx = classNames.bind(styles);

function ValidateSelect({
    label,
    labelRequire = false,
    control,
    className,
    errors,
    options,
    controllerName,
    errorMess,
    placeholder,
}) {
    const classes = cx('container', { error: errors[controllerName], [className]: className });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('label')}>
                <label>{label}</label> {labelRequire && <span className={cx('label-re')}>(*)</span>}
            </div>
            <Controller
                name={controllerName}
                control={control}
                defaultValue={null}
                render={({ field: { onChange, value, ref } }) => (
                    <Select
                        ref={ref}
                        className={cx('container', classes)}
                        placeholder={placeholder}
                        options={options}
                        value={
                            options.find((item) => item.value === value)
                                ? options.find((item) => item.value === value)
                                : ''
                        }
                        onChange={(val) => onChange(val.value)}
                    />
                )}
                // rules={{ required: true }}
            />
            <AnimatePresence mode="wait" initial={false}>
                {errors[controllerName] && <ErrorMess message={errorMess} />}
            </AnimatePresence>
        </div>
    );
}

export default ValidateSelect;
