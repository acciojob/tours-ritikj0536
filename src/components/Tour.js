import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article id={`tour-item-${id}`}>
      <img src={image} alt={name} />

      <h3>{name}</h3>
      <h4>${price}</h4>

      <p id={`tour-item-para-${id}`}>
        {readMore ? info : `${info.substring(0, 200)}`}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "See less" : "Show more"}
        </button>
      </p>

      <button
        id={`delete-btn-${id}`}
        className="remove-btn"
        onClick={() => removeTour(id)}
      >
        Remove
      </button>
    </article>
  );
};

export default Tour;
