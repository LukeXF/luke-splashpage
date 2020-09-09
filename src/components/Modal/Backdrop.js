import React from 'react';
import classes from './styles.module.scss';

const Backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}/> : null
)

export default Backdrop
