import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
        const data = response.data;
        setCountries(data);
      } catch (error) {
        console.error('Error al cargar los países:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <Router>
        <div className="container">
          <Navbar />
          <div className="row">
            <div className="col-md-3">
              <CountriesList countries={countries} />
            </div>
            <div className="col-md-9">
              <Routes>
                
                <Route path="/country/:alpha3Code" element={<CountryDetails />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;