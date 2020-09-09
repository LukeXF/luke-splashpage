import React, { Fragment, useState } from 'react';
import styles from './styles.module.scss';
import ReactMarkdown from 'react-markdown';
import LinesEllipsis from 'react-lines-ellipsis';

import Modal from '../Modal';
import Button from '../Button';

const Card = ({ project, display }) => {
    const [displayModal, setDisplayModal] = useState(false);
    // const displayClass = display === 'full' ? styles.cardDisplayFull : styles.cardDisplayGrid;

    const modalHandler = (e) => {
        e.preventDefault();
        setDisplayModal(!displayModal);
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
                {shorten && <LinesEllipsis text={project.text} maxLine='3'/>}
                {!shorten && <ReactMarkdown source={project.text}/>}
            </div>
        </Fragment>
    );

    return (<div className={styles.card}>
    {/*return (<div className={[styles.card, displayClass].join(' ')}>*/}
        {displayHeader()}
        {displayText(true)}
        <Button onClick={() => setDisplayModal(true)}>Read More</Button>
        <Modal show={displayModal} modalClosed={modalHandler}>
            {displayHeader()}
            {displayText()}
        </Modal>
    </div>);
};

export default Card;
