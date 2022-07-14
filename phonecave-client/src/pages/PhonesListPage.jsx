import React from 'react';
import { useState, useEffect } from 'react';
// import axios from 'axios';
// import SinglePhonePage from './SinglePhonePage';
import { Link } from 'react-router-dom';
import { loadPhones } from '../services/phones';

const PhonesListPage = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    loadPhones().then((response) => {
      console.log(response.data);
      setPhones(response.data);
    });
  });

  return (
    <div>
      PhonesListPage
      <ul>
        {phones.map((phone) => (
          <li>
            <Link to={`/phones/${phone._id}`}>{phone.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhonesListPage;
