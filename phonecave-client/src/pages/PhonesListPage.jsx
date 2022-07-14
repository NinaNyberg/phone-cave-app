import React from 'react';
import { useState, useEffect } from 'react';
// import axios from 'axios';
// import SinglePhonePage from './SinglePhonePage';
import { Link } from 'react-router-dom';
import { loadPhones } from '../services/phones';

const PhonesListPage = ({ phones }) => {
  // const [phones, setPhones] = useState([]);

  // useEffect(() => {
  //   loadPhones().then((response) => {
  //     console.log(response.data);
  //     setPhones(response.data);
  //   });
  // });

  return (
    <div>
      <h3>Phone List</h3>
      <ul>
        {Boolean(phones.length) &&
          phones.map((item) => (
            <li key={item._id} style={{ listStyle: 'none' }}>
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to={`/phones/${item._id}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PhonesListPage;
