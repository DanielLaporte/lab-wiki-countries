import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, Outlet } from 'react-router-dom'; 

function CountryDetails() {
  const { alpha3Code } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const apiUrl = `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setCountryData(response.data);
      })
      .catch((error) => {
        console.error('Error al cargar los detalles del país:', error);
      });
  }, [alpha3Code]);

  if (!countryData) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="country-details">
      
      <div className="row">
        <div className="col-md-6">
          
          <ul>
            
          </ul>
        </div>
        <div className="col-md-6">
          
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${countryData.alpha2Code.toLowerCase()}.png`}
            alt={`${countryData.name.common} Flag`}
          />
          <h3>{countryData.name.common}</h3>
          <p>Capital: {countryData.capital}</p>
          <p>Area: {countryData.area} km²</p>
          <p>Borders: {countryData.borders.join(', ')}</p>
          
        </div>
      </div>
      <hr />
      
      <Outlet />
    </div>
  );
}

export default CountryDetails;