import React, { Fragment, useState } from 'react';
import styles from './styles.module.scss';
import ReactMarkdown from 'react-markdown';
import Modal from '../Modal'
import Button from '../Button'

const Card = (project) => {
    const [displayModal, setCount] = useState(false);
    console.log({displayModal});

    const modalHandler = (e) => {
        e.preventDefault();
        setCount(!displayModal)
    }

    return (<div className={styles.card}>
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

        <div className={styles.cardText}>
            <ReactMarkdown source={project.text} />
        </div>

        <Button onClick={() => setCount(true)}>Read More</Button>

        {/*<header className="App-header">*/}
        {/*    <p>*/}
        {/*        Edit <code>src/App.js</code> and save to reload.*/}
        {/*    </p>*/}
        {/*    <a*/}
        {/*        className="App-link"*/}
        {/*        href="https://reactjs.org"*/}
        {/*        target="_blank"*/}
        {/*        rel="noopener noreferrer"*/}
        {/*    >*/}
        {/*        Learn React*/}
        {/*    </a>*/}
            <Modal show={displayModal} modalClosed={modalHandler}>
                <div style={{color:'black'}}>
                    The Best Has Happened To ME
                </div>
            </Modal>
        {/*</header>*/}
    </div>);
};

export default Card;
