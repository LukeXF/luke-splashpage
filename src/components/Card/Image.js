import React from 'react';
import Img from 'gatsby-image';
import styles from './styles.module.scss';

const Image = ({ images, onClick }) => (
    <div onClick={onClick} className={`${styles.imageSlider} ${images?.length === 4 ? styles.imageSliderFour : ''}${images?.length === 2 ? styles.imageSliderTwo : ''}`}>
        {images?.map(image => (
            <div className={styles.image}>
                <Img fluid={image.childImageSharp.fluid} style={{ height: "100%" }} imgStyle={{ objectPosition: 'left' }}/>
            </div>
        ))}
    </div>
);

export default Image;
