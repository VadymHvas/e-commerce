import React from 'react';
import { useState } from 'react';
import FurnItem from './FurnItem';
import "./Furns.css";

const Furns = ({furns, add, order, setOrder}) => {
    return (
        <section className="furnitures">
            <div className="container">
                <div className="furn-title">
                    <div className="title">
                        <h1>Our Furnitures</h1>
                    </div>
                </div>
                <div className="furn-content">
                    <div className="furns">
                        {furns.map(furn =>
                            <FurnItem furn={furn} 
                            onAdd={add} key={furn.id} 
                            order={order} setOrder={setOrder}/>  
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Furns;