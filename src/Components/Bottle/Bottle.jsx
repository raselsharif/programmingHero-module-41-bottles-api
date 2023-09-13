
import "./Bottle.css"

function Bottle({ bottle, addToCartHandler }) {
    // console.log(bottle);


    const { name, img, price } = bottle;
    return (
        <div className='bottle'>
            <h3>{name}</h3>
            <img src={img} alt="bottle image" />
            <p>$ {price}</p>
            <button className='purchase-btn' onClick={() => addToCartHandler(bottle)}>Purchase</button>
        </div>
    );
}

export default Bottle;