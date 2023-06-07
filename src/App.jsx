import React, {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Furns from './components/Furnitures/Furns';
import "./components/Main.css";

function App() {
  const [order, setOrder] = useState([])

  const [furns, setFurns] = useState([
    {id: 1, name: "Table",
     desc: "A beautiful table that will decorate your kitchen!", price: 345, img: "table.png"},
    {id: 2, name: "Wardrobe",
     desc: "A large closet that can fit a lot of things", price: 560, img: "shaff.jpeg"},
    {id: 3, name: "Computer desk",
     desc: "A computer desk in a minimalist style", price: 215, img: "compTable.jpg"}
  ])

  return (
    <div className="wrapper">
      <Navbar order={order} 
       setOrder={setOrder} />

      <Main />

      <Furns furns={furns} setOrder={setOrder} 
      order={order}/>
    </div>
  )
}

export default App;

// <h1> - sections title