import React, { Fragment, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import ReactMarkdown from 'react-markdown';
import LinesEllipsis from 'react-lines-ellipsis';

import Modal from '../Modal';
import Button from '../Button';
import Image from './Image';

const Card = ({ title, date, text, url, company, displayMode }) => {
    const [displayModal, setDisplayModal] = useState(false);
    const [lineCount, setLineCount] = useState(3);
    const displayClass = displayMode === 'full' ? styles.cardRowBlock : styles.cardRowGrid;
    console.log({ displayMode });

    useEffect(() => {
        console.log('oh yes');
        setTimeout(
            () => {
                if (displayMode === 'full') {
                    setLineCount(8);
                 } else {
                    setLineCount(3);
                }
            },
            300
        );
    }, [displayMode]);

    const handleModalClose = (e) => {
        e.preventDefault();
        setDisplayModal(false);
    };

    const Header = () => (
        <Fragment>
            <div className={styles.cardWrapper}>
                <h2 className={styles.cardTitle}>{title}</h2>
                <h3 className={styles.cardTitle && styles.right}>
                    {date}
                    {length && ` (${length})`}
                </h3>
            </div>

            <div className={styles.cardWrapper}>
                <p className={styles.cardTitle}>{company}</p>
                <p className={styles.cardTitle && styles.right}>
                    <a href={url} target="_blank">{url}</a>
                </p>
            </div>
        </Fragment>
    );

    const Text = ({ shorten }) => (
        <Fragment>
            <div className={styles.cardText}>
                {shorten && <LinesEllipsis text={text} maxLine={lineCount}/>}
                {!shorten && <ReactMarkdown source={text}/>}
            </div>
        </Fragment>
    );

    return (<div className={`${styles.card} ${displayClass}`}>
        <Image/>
        <div className={styles.cardContent}>
            <Header/>
            <Text shorten/>
            <Button onClick={() => setDisplayModal(true)}>Read More</Button>
            <Modal show={displayModal} onClose={handleModalClose}>
                <Header/>
                <Text/>
            </Modal>
        </div>
    </div>);
};

export default Card;
