import React, { Fragment } from 'react';
import styles from './styles.module.scss';

const modal = ({ onClose, show, children }) => {
    if (!show) return null;

    return (
        <Fragment>
            <div
                className={styles.backdrop}
                onClick={onClose}
            />
            <div className={styles.modal}>
                {children}
            </div>
        </Fragment>
    );
};


export default modal;
