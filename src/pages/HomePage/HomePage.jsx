import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import "./homepage.css";

const HomePage = ({ accomodations }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!accomodations) {
      setData(localStorage.getItem("accomodations"));
    } else {
      setData(accomodations);
    }
  }, [accomodations]);

  return (
    <main>
      <div
        className='home-main-banner'
        style={{
          backgroundImage: "url(/img-01.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className='main-banner-filter'>
          <div className='main-banner-text'>Chez vous, partout et ailleurs</div>
        </div>
      </div>
      <div className='cards-container'>
        {data.map((accomodation) => (
          <Card key={accomodation.id} accomodation={accomodation} />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
