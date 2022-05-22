import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Accomodation from "./pages/Accomodation/Accomodation";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  const [accomodations, setAccomodations] = useState([]);

  const getAccomodations = async () => {
    const response = await fetch("data/accomodation.json");
    const data = await response.json();
    console.log(data.accomodations);
    setAccomodations(data.accomodations);
    localStorage.setItem("accomodations", data.accomodations);
  };

  useEffect(() => {
    getAccomodations();
  }, []);

  return (
    <>
      <div className='container'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path='/'
              element={<HomePage accomodations={accomodations} />}
            />
            <Route path='/about' element={<AboutPage />} />
            <Route
              path='/accomodation/:id'
              element={<Accomodation accomodations={accomodations} />}
            />
            <Route path='/accomodation/*' element={<ErrorPage />} />
            <Route path='/*' element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
