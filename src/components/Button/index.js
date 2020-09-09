import React from 'react';
import styles from './styles.module.scss';

const modal = props => {
    const whiteBgClass = props.whiteBg ? styles.whiteBg : '';
    return (
        <div className={[styles.button, whiteBgClass].join(' ')} onClick={props.onClick}>
            {props.children}
        </div>
    );
};

export default modal;
