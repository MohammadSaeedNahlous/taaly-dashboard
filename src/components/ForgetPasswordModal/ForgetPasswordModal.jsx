// Modal.js

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css'

const ForgetPasswordModal = ({ isOpen, onClose, children }) => {
    const modalRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={ styles.modalOverlay }>
            <div className={ styles.modal } ref={ modalRef }>
                <button className={ styles.closeBtn } onClick={ onClose }>Close</button>
                { children }
            </div>
        </div>
    );
};

export default ForgetPasswordModal;
