import React from 'react';
import styles from './styles.module.scss';

const modal = props => {
    return (
        <div className={styles.button} onClick={props.onClick}>
            {props.children}
        </div>
    );
};

export default modal;
