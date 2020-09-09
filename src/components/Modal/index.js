import React, { Fragment } from 'react';
import classes from './styles.module.scss';
import Backdrop from './Backdrop';

const modal = props => {
    return (
        <Fragment>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                className={classes.Modal}
                style={{
                    transform:props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity : props.show ? 1 : 0
                }}
            >
                {props.children}
            </div>
        </Fragment>
    );
};


export default modal;
