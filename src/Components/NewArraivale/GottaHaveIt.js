import React, { useEffect, useState } from 'react';

import Mens from './Mens';

import Active from './Active';

import '../Card/Card.css'
import Womens from './Womens';
import Kids from './Kids';

const GottaHaveIt = () => {
  const [man, setMan] = useState([]);
  const [woman, setWoman] = useState([]);
  const [Kid, setKid] = useState([]);
  const [active, setActive] = useState([]);

  useEffect(() => {
    fetch("Test.json")
      .then((res) => res.json())
      .then((data) => {
        setActive(data);
        setMan([]);
        setWoman([]);
        setKid([]);
      });
  }, []);

  const newArrivals = () => {
    fetch("Test.json")
      .then((res) => res.json())
      .then((data) => {
        setMan(data);
        setWoman([]);
        setKid([]);
        setActive([]);
      });
  };
  const bestSellers = () => {
    fetch("TestTwo.json")
      .then((res) => res.json())
      .then((data) => {
        setWoman(data);
        setMan([]);
        setKid([]);
        setActive([]);
      });
  };
  const OnSale = () => {
    fetch("TestThree.json")
      .then((res) => res.json())
      .then((data) => {
        setKid(data);
        setMan([]);
        setWoman([]);
        setActive([]);
      });
  };

  let designClass = "design";

  return (
    <div className="">
      <div className="justify-center items-center text-center text-3xl my-16">
        <div className='text-center pb-4'>
          <h1 className='headerStyle text-4xl font-semibold'>New Arrivals</h1>
          <h3 className='text-3xl font-medium'>Stay Ahead of the Fashion Game with Our Latest Collection of Trendy Outfits</h3>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <button
            onClick={newArrivals}
            className={man.length || active.length ? designClass : "notDesign"}
          >
            Man
          </button>
          <button
            onClick={bestSellers}
            className={woman.length ? designClass : "notDesign"}
          >
            Woman
          </button>
          <button
            onClick={OnSale}
            className={Kid.length ? designClass : "notDesign"}
          >
            Kids
          </button>
        </div>
      </div>

      <Kids kids={Kid} />
      <Womens woman={woman} />
      <Active active={active} />
      <Mens man={man} />
    </div>
  );
};

export default GottaHaveIt;