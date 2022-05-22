import React from "react";
import { useParams } from "react-router-dom";
import "./accomodation.css";
import Error from "../../components/Error/Error.jsx";
import Accordion from "../../components/Accordions/Accordion";

const Accomodation = ({ accomodations }) => {
  let { id } = useParams();
  const accomodation = accomodations.find((a) => a.id === id);
  console.log(accomodation);

  const getRatingStyle = (rating) => {
    return accomodation.rating >= rating ? "rating-on" : "rating-off";
  };

  return accomodation ? (
    <main>
      <div className='accomodation-banner'>
        <img src={accomodation.cover} alt='' />
      </div>
      <div className='accomodation-all-info'>
        <div className='accomodation-all-info-1'>
          <div className='accomodation-info-title'>{accomodation.title}</div>
          <div className='accomodation-info-location'>
            {accomodation.location}
          </div>
          <div className='accomodation-info-tags'>
            {accomodation.tags.map((tag, i) => (
              <div key={i} className='accomodation-info-tag'>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className='accomodation-all-info-2'>
          <div className='accomodation-info-host'>
            <div className='accomodation-info-hostname'>
              {accomodation.host.name}
            </div>
            <div className='accomodation-info-host-picture'>
              <img src={accomodation.host.picture} alt='' />
            </div>
          </div>
          <div className='accomodation-info-rating'>
            <span className={`rating ${getRatingStyle(1)}`}>&#9733;</span>
            <span className={`rating ${getRatingStyle(2)}`}>&#9733;</span>
            <span className={`rating ${getRatingStyle(3)}`}>&#9733;</span>
            <span className={`rating ${getRatingStyle(4)}`}>&#9733;</span>
            <span className={`rating ${getRatingStyle(5)}`}>&#9733;</span>
          </div>
        </div>
      </div>
      <div className='accomodation-accordions'>
        <div className='accordion-wrapper'>
          <Accordion content={accomodation.description} title={"Description"} />
        </div>
        <div className='accordion-wrapper'>
          <Accordion content={accomodation.equipments} title={"Equipements"} />
        </div>
      </div>
    </main>
  ) : (
    <Error />
  );
};

export default Accomodation;
