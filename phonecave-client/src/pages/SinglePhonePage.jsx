import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadSinglePhone } from '../services/phones';

const SinglePhonePage = () => {
  const [phone, setPhone] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadSinglePhone(id).then((data) => {
      console.log(data.phone);
      setPhone(data.phone);
    });
  }, [id]);

  return (
    <div>
      <h3>{phone.name}</h3>
      <p>{phone.descripion}</p>
      <small>{phone.price}</small>
    </div>
  );
};

export default SinglePhonePage;
