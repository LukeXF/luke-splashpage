import React, { Fragment, useState } from 'react';
import '@styles/styles.scss';
import styles from './styles.module.scss';
import Card from '../components/Card';
import Layout from '../components/Layout';
import Button from '../components/Button';
import projects from '../data/projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    const [displayMode, setDisplayMode] = useState('grid');
    const displayClass = displayMode === 'full' ? styles.fullRow : null;

    return (
        <Layout>
            <div>{displayMode}</div>
            <div className={styles.main}>
                <div className={styles.mainContent}>
                    <Button whiteBg onClick={() => setDisplayMode('grid')}>
                        <FontAwesomeIcon icon={['fas', 'th-large']}/>
                    </Button>
                    <Button whiteBg onClick={() => setDisplayMode('full')}>
                        <FontAwesomeIcon icon={['fas', 'align-justify']}/>
                    </Button>
                    <div className={[styles.mainRow, displayClass].join(' ')}>
                        {
                            projects.map((project) => {
                                return <div className={styles.mainCol}>
                                    <Card key={project.title} display={displayMode} project={project}/>
                                </div>;
                            })
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
