import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle"
import "./Bottles.css"

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [carts, setCarts] = useState([])

    useEffect(() => {
        const URL = "./bottles.json";
        fetch(URL)
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    const addToCartHandler = (bottle) => {
        setCarts([...carts, bottle])
    }
    return (
        <div>
            <h2>Bottles List</h2>
            <h3>Available Bottles: {bottles.length}</h3>
            <h3>Available Carts: {carts.length}</h3>
            <div className="carts-container">
                {
                    carts.map(cart => <img src={cart.img}></img>)
                }
            </div>
            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} addToCartHandler={addToCartHandler}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;