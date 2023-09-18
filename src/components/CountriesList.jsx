import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function CountriesList({ countries }) {
  return (
    <div className="container">
     
      <ul className="country-list">
        {countries.map((country) => (
          <li key={country.alpha3Code} className="country-item">
            <Link to={`/country/${country.alpha3Code}`} className="country-link">
              <div className="country-box">
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt={`${country.name.common} Flag`}
                  className="country-flag"
                />
                <p className="country-name">{country.name.common}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountriesList;