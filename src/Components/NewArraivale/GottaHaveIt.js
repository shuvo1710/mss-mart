import React, { useEffect, useState } from "react";
import Mens from "./Mens";
import Active from "./Active";
import "../Card/Card.css";
import Womens from "./Womens";
import Kids from "./Kids";
import { useNavigation } from "react-router-dom";
import Loader from "../Loder/Loader";

const GottaHaveIt = () => {
  const [man, setMan] = useState([]);
  const [woman, setWoman] = useState([]);
  const [Kid, setKid] = useState([]);
  const [active, setActive] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch("https://mss-mart-server.vercel.app/allProducts?category=man")
      .then((res) => res.json())
      .then((data) => {
        setActive(data);
        setMan([]);
        setWoman([]);
        setKid([]);
      });
  }, []);

  const mansProduct = () => {
    fetch("https://mss-mart-server.vercel.app/allProducts?category=man")
      .then((res) => res.json())
      .then((data) => {
        setMan(data);
        setWoman([]);
        setKid([]);
        setActive([]);
      });
  };
  const womansProducts = () => {
    fetch("https://mss-mart-server.vercel.app/allProducts?category=woman")
      .then((res) => res.json())
      .then((data) => {
        setWoman(data);
        setMan([]);
        setKid([]);
        setActive([]);
      });
  };
  const kidsProducts = () => {
    fetch("https://mss-mart-server.vercel.app/allProducts?category=kid")
      .then((res) => res.json())
      .then((data) => {
        setKid(data);
        setMan([]);
        setWoman([]);
        setActive([]);
      });
  };

  let designClass = "design";
  if (navigation.state === "loading") {
    return <Loader />;
  }

  return (
    <div className=" container mx-auto pt-28">
      <div className="justify-center items-center text-center">
        <div className="text-center pb-10">
          <h1 className="headerStyle xl:text-4xl lg:text-3xl font-medium pb-2">New Arrivals</h1>
          <h3 className="headerStyle xl:text-2xl lg:text-xl font-medium">
            Stay Ahead of the Fashion Game with Our Latest Collection of Trendy
            Outfits
          </h3>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <button
            onClick={mansProduct}
            className={man.length || active.length ? designClass : "notDesign"}
          >
            Man
          </button>
          <button
            onClick={womansProducts}
            className={woman.length ? designClass : "notDesign"}
          >
            Woman
          </button>
          <button
            onClick={kidsProducts}
            className={Kid.length ? designClass : "notDesign"}
          >
            Kids
          </button>
        </div>
      </div>

      <div className="justify-end items-end text-end mb-10 -mt-14">
        <select className="select select-bordered w-full max-w-xs ">
          <option disabled selected>
            Sorting  Price
          </option>
          <option className="">Low</option>
          <option>High</option>
        </select>
      </div>

      <Kids kids={Kid} />
      <Womens woman={woman} />
      <Active active={active} />
      <Mens man={man} />
    </div>
  );
};

export default GottaHaveIt;
