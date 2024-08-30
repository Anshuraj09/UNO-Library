import React from 'react';
import Cards from "./Cards";
import { Link } from "react-router-dom";

function contact() {
  return (

    <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
  )
}

export default contact