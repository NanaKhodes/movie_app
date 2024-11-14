import React, { useState } from "react";
import styles from "./Search.module.css"

const Search = ({onSearch}) => {
 
  const handleChange = (event) => {
    onSearch(event.target.value)
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
        What would you 
        like to watch?
      </h1>

      <input
        className={styles.input}
        type="search"
        placeholder="...Search here"
        onChange={handleChange}
       
      />
     
    </div>
  );
};

export default Search;
