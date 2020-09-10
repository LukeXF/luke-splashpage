import React from 'react';
import styles from './styles.module.scss';

const Image = (props) => (
    <div className={styles.imageSlider}>
        <div className={styles.image}>
            <img  src={'https://images.unsplash.com/photo-1599713201276-6733c471d85a'} alt={'test'}/>

        </div>
        <div className={styles.image}>
            <img  src={'https://images.unsplash.com/photo-1599713201276-6733c471d85a'} alt={'test'}/>

        </div>
        </div>
);

export default Image;
