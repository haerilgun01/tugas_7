import React, { useState } from 'react';
import styles from "./AddMovie.module.css"

const AddMovie = (props) => {

    // props yang datanya berasal dari main
    const { movies, setMovies } = props

    // state yang menghandle proses error pada inputan
    const [ titleEror, setTitleEror ] = useState("false")
    const [ dateEror, setDateEror] = useState("false")
    const [ linkEror, setLinkEror] = useState("false")
    const [ optionEror, setoptionEror] = useState("false")

    // state yang menghandle proses inputan
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [link, setLink] = useState("")
    const [option, setoption] = useState("")

    // arrow function menghandle inputan title
    const handleTitle = (e) => {setTitle(e.target.value)}

    // arrow function menghandle  inputan Link
    const handleLink = (e) => {setLink(e.target.value)}

    // arrow function menghandle inputan date
    const handleDate = (e) => {setDate(e.target.value)}

    const handleoption= (e) => {setoption(e.target.value)}


    // arrow function menghandle submit
    const handleSubmit = (e) => {
        e.preventDefault()

        if(title === "" && date === "") {alert("Title, Link, Date dan Option kosong")}

        if (title === "")
        {
           alert("Isi Title ")
        } 

        else if (link === "")
        {
            alert("Isi Link ")
        }
        
        else if (date === "")
        {
           alert("Isi Date ")
        } 

        else if (option == "")
        {
            alert("isi Option")
        }
         
         else {
            const movie = {
                id: 4,
                title: title, 
                date: date,
                image: link
            } 
            setMovies([...movies, movie])
         
        }
    }

    return (
        <div className={styles.container}>
           <form className={styles.addmovie} onSubmit={handleSubmit}>
           <input placeholder='Isi Title Disini' className={styles.addmovie__input} id='title' type='text' value={title} onChange={handleTitle} />

           <input placeholder='Isi Link Disini' className={styles.addmovie__input} id='link' type='text' value={link} onChange={handleLink} />
           
           <input placeholder='Isi Date' className={styles.addmovie__input} id='date' type='date' value={date} onChange={handleDate} />
           
           <select placeholder='Isi Opsi' className={styles.addmovie__input} id='option' value={option} onChange={handleoption}>
            
           <option value="action">Option</option>
           <option value="action">Action</option>
           <option value="drama">Drama</option>
           <option value="horror">Horror</option>
           <option value="comedy">Comedy</option>
            </select>
       

           <button className={styles.addmovie__button}>Simpan</button>
           </form>
        </div>
    );
}

export default AddMovie;