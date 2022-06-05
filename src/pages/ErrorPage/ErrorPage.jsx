import React from "react";
import { Link } from "react-router-dom";
import "./errorpage.css";

const ErrorPage = () => {
  return (
    <main className='error-container'>
      <div className='error-code'>404</div>
      <div className='error-msg'>
        Oups! La page que vous demandez n'existe pas.
      </div>
      <Link to='/'>
        <div className='error-back-home'>Retourner sur la page d'accueil</div>
      </Link>
    </main>
  );
};

export default ErrorPage;
