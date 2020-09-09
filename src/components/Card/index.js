import React, { Fragment, useState } from 'react';
import styles from './styles.module.scss';
import ReactMarkdown from 'react-markdown';
import LinesEllipsis from 'react-lines-ellipsis';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';


import Modal from '../Modal';
import Button from '../Button';

const Card = (project) => {
    const [displayModal, setCount] = useState(false);
    console.log({ displayModal });

    const modalHandler = (e) => {
        e.preventDefault();
        setCount(!displayModal);
    };

    const displayHeader = () => (
        <Fragment>
            <div className={styles.cardWrapper}>
                <h2 className={styles.cardTitle}>{project.title}</h2>
                <h3 className={styles.cardTitle && styles.right}>
                    {project.date}
                    {project.length && ` (${project.length})`}
                </h3>
            </div>

            <div className={styles.cardWrapper}>
                <p className={styles.cardTitle}>{project.company}</p>
                <p className={styles.cardTitle && styles.right}>
                    <a href={project.url} target="_blank">{project.url}</a>
                </p>
            </div>
        </Fragment>
    );

    const displayText = (shorten) => (
        <Fragment>
            <div className={styles.cardText}>
                {shorten && <LinesEllipsis text={project.text}/>}
                {!shorten && <ReactMarkdown source={project.text}/>}
            </div>
        </Fragment>
    );

    return (<div className={styles.card}>
        {displayHeader()}
        {displayText(true)}
        <Button onClick={() => setCount(true)}>Read More</Button>
        <Modal show={displayModal} modalClosed={modalHandler}>
            {displayHeader()}
            {displayText()}
        </Modal>
    </div>);
};

export default Card;
