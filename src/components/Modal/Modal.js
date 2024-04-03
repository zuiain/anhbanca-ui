import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div id="modal" className={cx('overlay')}>
            {children}
        </div>,
        document.querySelector('body'),
    );
}

Modal.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    setOpenModal: PropTypes.func,
};

export default Modal;
