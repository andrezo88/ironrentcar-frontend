import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Rent = () => {

  const [rent, setRent] = useState({});

  const [index, setIndex] = useState(0);
  const handleSelect = (selectIndex, e) => {
    setIndex(selectIndex);
  }

  const { id } = useParams();

  useEffect(() => {
    const getOneRent = async () => {
      const { data } = await axios.get(PASSAR A URL);
      setRent(data);
    };
    getOneRent();
  }, [id]);
  return (
    <section className='container'>
      <div>
        <h4>Top and Bottom</h4>
          <b-card-group deck>
            <b-card img-src={} img-alt={} img-top>
              <b-card-text>
                {}
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
        <div className="mt-4">
          <h4>{}</h4>
          <b-card-text>
            {}
          </b-card-text>
        </div>
    </section>
  )
}
