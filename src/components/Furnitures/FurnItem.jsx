import React from 'react';
import "./FurnItem.css";

const FurnItem = ({furn, order, setOrder}) => {
    const addToOrder = (item) => {
        setOrder([...order, item])

        if(order > 3) {
            console.log("Asd")
        }

        console.log(item)
    }

    return (
        <div className="furn-item">
            <div className="furn-content">
                <div className="furn-image">
                    <img src={"images/" + furn.img} alt="error" />
                </div>
                <div className="furn-info">
                    <div className="furn-name">
                        <h2>{furn.name}</h2>
                    </div>
                    <div className="furn-description">
                        <p>{furn.desc}</p>
                    </div>
                    <div className="furn-price">
                        <h3>${furn.price}</h3>
                    </div>
                    <div className="furn-button">
                        <button onClick={() => addToOrder(furn)}>Add To Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FurnItem;