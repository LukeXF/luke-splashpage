import React, { Fragment } from 'react';
import styles from './styles.module.scss';

const Card = (project) => {
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

        <p className={styles.cardText}>{project.text}</p>
    </div>);
};
export default Card;
