import React from 'react';
import styles from "./Movie.module.css"

const Movie = (props) => {
    const { title, date, image, option } = props
    return (
    <div className={styles.movie}>
        <img 
            className={styles.movie__image}
            src={image}
            alt=""
        />
            <h3 className={styles.movie__title}>{title}</h3>
            <p className={styles.movie__date}>{date}</p>
            <p className={styles.movie__option}>{option}</p>
    </div>
    );
}

export default Movie;