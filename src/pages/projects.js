import React, { Fragment } from 'react';
import '@styles/styles.scss';
import styles from './styles.module.scss';
import Card from '../components/Card';
import projects from '../data/projects.json';

const Home = () => {
    return (
        <Fragment>
            <div className={styles.main}>
                <div className={styles.mainContent}>
                    <div className={styles.mainPadding}>
                        {
                            projects.map((project) => {
                                console.log(3, project.title);
                                return <Card key={project.title} {...project}/>;
                            })
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;
