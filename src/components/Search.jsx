import React, { useState } from "react";

const Search = ({onSearch}) => {
 
  const handleChange = (event) => {
    onSearch(event.target.value)
  };
  return (
    <div className="bg-yellow">
      <h1 className="text-center text-3xl">
        What would you <br />
        like to watch
      </h1>

      <input
        className="px-4 py-2 border w-full rounded-lg"
        type="search"
        placeholder="...Search here"
        onChange={handleChange}
       
      />
     
    </div>
  );
};

export default Search;
