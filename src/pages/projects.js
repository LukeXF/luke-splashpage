import React, { Fragment, useState } from 'react';
import '@styles/styles.scss';
import styles from './styles.module.scss';
import Card from '../components/Card';
import Layout from '../components/Layout';
import Button from '../components/Button';
import projects from '../data/projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql } from 'gatsby';

const Home = ({ data: { allProjectsJson: { edges: data } } }) => {
    const [displayMode, setDisplayMode] = useState('grid');
    const displayClass = displayMode === 'full' ? styles.rowBlock : styles.rowInline;
    const projects = data.map(item => item.node);

    console.log({data});
    return (
        <Layout>
            <div className={styles.main}>
                <div className={styles.mainContent}>
                    <div className={styles.buttonContent}>
                        <Button whiteBg onClick={() => setDisplayMode('grid')}>
                            <FontAwesomeIcon icon={['fas', 'th-large']}/>
                        </Button>
                        <Button whiteBg onClick={() => setDisplayMode('full')}>
                            <FontAwesomeIcon icon={['fas', 'align-justify']}/>
                        </Button>
                    </div>
                    <div className={`${styles.row} ${displayClass}`}>
                        {
                            projects.map(project => {
                                return (
                                    <div className={styles.col} key={project.title}>
                                        <Card {...project} displayMode={displayMode}/>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query {
        allProjectsJson {
            edges {
                node {
                    id
                    title
                    url
                    text
                    date
                    company
                    length
                    images {
                        childImageSharp {
                            fluid(maxWidth: 600) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`;
export default Home;
