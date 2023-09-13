import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLS, getFromLS } from "../../../public/utilities/SaveLs";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const URL = "./bottles.json";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  useEffect(() => {
    const storedCart = getFromLS();
    console.log(storedCart);
  }, []);
  //  load data from localStorage
  const addToCartHandler = (bottle) => {
    setCarts([...carts, bottle]);
    addToLS(bottle.id);
  };

  return (
    <div>
      <h3>Available Bottles: {bottles.length}</h3>
      <h3>Available Carts: {carts.length}</h3>
      <div className="carts-container">
        {carts.map((cart, idx) => (
          <img key={idx} src={cart.img}></img>
        ))}
      </div>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            addToCartHandler={addToCartHandler}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
