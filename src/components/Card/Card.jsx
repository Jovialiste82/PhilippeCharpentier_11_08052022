import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ accomodation }) => {
  return (
    <Link className='card-container' to={`/accomodation/${accomodation.id}`}>
      <div
        className='card'
        style={{
          // backgroundImage: "url(/img-01.png)",
          backgroundImage: `url(${accomodation.cover})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className='card-filter'>
          <div className='card-title'>{accomodation.title}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
