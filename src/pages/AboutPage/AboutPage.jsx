import React from "react";
import "./aboutpage.css";
import Accordion from "../../components/Accordions/Accordion";

const AboutPage = () => {
  const text1 =
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
  const text2 =
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
  const text3 =
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
  const text4 =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

  return (
    <main>
      <div
        className='about-main-banner'
        style={{
          backgroundImage: "url(/img-02.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className='about-accordions-container'>
        <div className='about-accordion'>
          <Accordion content={text1} title={"Fiabilité"} />
        </div>
        <div className='about-accordion'>
          <Accordion content={text2} title={"Respect"} />
        </div>
        <div className='about-accordion'>
          <Accordion content={text3} title={"Service"} />
        </div>
        <div className='about-accordion'>
          <Accordion content={text4} title={"Sécurité"} />
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
