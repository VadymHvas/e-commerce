import React, {useState} from 'react';
import "./OrderItem.css";

const OrderItem = ({item, deleteOrder}) => {
    const [price, setPrice] = useState(item.price);
    const [countPrice, setCountPrice] = useState(1);

    const addPrice = () => {
        setPrice(price + item.price);
        setCountPrice(countPrice + 1);
    };

    const decrementPrice = () => {
        setPrice(price - item.price);
        setCountPrice(countPrice - 1);

        if (countPrice < 2) {
            deleteOrder(item.id);
        };
    };

    return (
        <div className="order-item">
            <div className="order-image">
                <img src={"images/" + item.img} alt="error" />
            </div>
            <div className="order-info">
                <div className="order-name">
                    <h5>{item.name}</h5>
                </div>
                <div className="order-price">
                    <h5>${price}</h5>
                </div>
                <div className="order-count">
                    <span>{countPrice}</span>
                </div>
                <div className="order-add" onClick={() => addPrice()}
                style={{cursor: "pointer"}}>
                    <a>+</a>
                </div>
                <div className="order-dec" onClick={() => decrementPrice()}>
                    <a>-</a>
                </div>
            </div>
            <div className="order-button">
                <a onClick={() => deleteOrder(item.id)}>
                    <img src="images/delete.png" alt="error" />
                </a>
            </div>
        </div>
    );
};

export default OrderItem;

