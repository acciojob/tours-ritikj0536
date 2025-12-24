import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div>
      <article>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <h4>${price}</h4>

        <p>
          {readMore ? info : `${info.substring(onabort, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "See less" : "Show more"}
          </button>
          <button className="remove-btn" onClick={() => removeTour(id)}>Remove</button>
        </p>
      </article>
    </div>
  );
};

export default Tour;
