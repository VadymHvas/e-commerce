import React, {useState} from 'react';
import OrderItem from './OrderItem';
import "./Navbar.css";

const Navbar = ({order, setOrder}) => {
    const [openCart, setOpenCart] = useState(false)

    const [fillOrder, setFillOrder] = useState(order)

    const deleteOrder = (id) => {
        setOrder(order.filter((ord) => ord.id !== id))
    }

    const showOrder = ({order}) => {
        return (
            <div className="orders">
                {order.map(furn => 
                    <OrderItem deleteOrder={deleteOrder} item={furn} key={furn.id} />    
                )}
            </div>
        )
    }

    const hideOrder = () => {
        return (
            <div className="empty">
                <p className="empty-message">The shopping cart is empty</p>
            </div>
        )
    }

     return (
        <header>
            <div className="header-logo">
                <a href="#">Furnitures</a>
            </div>
            <nav className="navbar-menu">
                <ul className="menu">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Sales</a>
                    </li>
                    <li>
                        <a href="#">Furtnitures</a>
                    </li>
                    <li>
                        <a onClick={() => setOpenCart(!openCart)}>
                            <img src="images/shopping-cart.png" alt="error" width="20" />
                        </a>
                    </li>
                    {openCart ? (
                        <div className="cart-content">
                            <div className="cart-header">
                                <h4>Shopping Cart</h4>
                            </div>
                            <div className="cart-body">
                                <div className="cart-furns">
                                    {order.length > 0 ? showOrder({order}) : hideOrder()}
                               </div>
                            </div>
                        </div>
                    ) : ""}
                </ul>
                <div className="header-icon">
                    <span></span>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;