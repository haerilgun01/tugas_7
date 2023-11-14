import { useState } from "react"
import Movie from "../Movie/Movie"
import styles from "./Movies.module.css"

const Movies = (props) => {
    const {item} = props
  return (
      <div className={styles.container}>
        <section className={styles.movies}>
            <h2 className={styles.movies__title}>Latest Movies</h2>
            <div className={styles.movie__container}>
                {
                    item.map((data) => <Movie key={data.id} title={data.title} date={data.date} image={data.image} option={data.option} />)
                }       
            </div>
        </section>
      </div>
  )
}

export default Movies