import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle"
import "./Bottles.css"

const Bottles = () => {
    const [bottles, setBottles] = useState([])

    useEffect(() => {
        const URL = "./bottles.json";
        fetch(URL)
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    return (
        <div>
            <h2>Bottles List</h2>
            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;