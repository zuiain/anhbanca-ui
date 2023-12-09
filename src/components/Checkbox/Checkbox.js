import classNames from 'classnames/bind';
import styles from './Checkbox.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Checkbox({ label, checked, disabled = false, className, ...props }) {
    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);

    function handleOnChange() {
        setIsChecked(!isChecked);
    }

    return (
        <div className={cx('wrapper')}>
            <label className={cx('content')}>
                <input
                    className={cx('input', { checked: isChecked, [className]: className })}
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleOnChange}
                    disabled={disabled}
                    {...props}
                />
                <span className={cx('label')}>{label}</span>
            </label>
        </div>
    );
}

export default Checkbox;
