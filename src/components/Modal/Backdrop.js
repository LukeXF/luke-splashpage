import React from 'react';
import styles from './styles.module.scss';

const Backdrop = (props) => (
    props.show ? <div
        className={styles.Backdrop}
        onClick={props.clicked}
        // style={{
        //     opacity: props.show ? 0.5 : 0,
        // }}
    /> : null
);

export default Backdrop;
