import React, { Fragment } from 'react';
import '@styles/styles.scss';
import styles from './styles.module.scss';
// import Logo from '@images/luke.png';

const Home = () => {
    return (
        <Fragment>
            <div className={styles.offline}>
                <div className={styles.offlineContent}>
                    <div className={styles.offlineLogo}>
                        <img src="images/luke.png"/>
                    </div>
                    <h1>Luke J Brown</h1>
                    <h3>
                        CEO at <a href="https://elementsoftworks.co.uk">Element Softworks Ltd</a> //
                        CTO at <a href="https://skippermyboat.com">Skipper My Boat Inc.</a></h3>
                    <p>
                        Since 2012 I have had a passion for development and digital creativity. After several years of
                        freelancing work I setup my company, Element Softworks Ltd to grow a group of highly-talented
                        specialists to form a reliable full-service creative agency for small to medium businesses in
                        the UK and the USA.
                    </p>
                    <p>
                        We pride ourselves on building bespoke, responsive and innovative solutions for clients in
                        all industries. To learn more please view <a href="https://elementsoftworks.co.uk/brochure">our
                        brochure</a>. If you're interested in hiring me or my services then we charge £300-£400 per day
                        per person. We specialise in React.Js, Node.js, No SQL architecture.
                    </p>
                    <p>In the most recent years I have joined Skipper My Boat as the CTO to build a peer-to-peer global
                        yacht rental platform, as well as setting up a SaaS company
                        called <a href="https://merlinpanel.com">Merlin Panel</a> to empower businesses to control their
                        online presence all in one place.</p>

                    <div className={styles.signature}>
                        <img src="images/lb-signature-dark.png"/>
                    </div>
                </div>
                <footer>
                    <p>
                        This website was created by <a href="https://elementsoftworks.co.uk">Element Softworks
                        Ltd</a> and is powered by <a href="https://merlinpanel.com">Merlin Panel</a>.
                    </p>
                </footer>
            </div>
        </Fragment>
    );
};

export default Home;
