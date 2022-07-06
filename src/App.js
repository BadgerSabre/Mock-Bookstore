import { useState } from 'react'
import './App.css';
import Nav from 'react-bootstrap/Nav'
import Inventory from './Inventory'
import Store from './Components/Store'
import Cart from './Components/Cart'

function App() {
  const [cartContents, setCartContents] = useState([])
  const [cartDisplay, setCartDisplay] = useState(false)

  const display = () => cartDisplay ? <Cart cartContents={cartContents} setCartContents={setCartContents} /> : <Store cartContents={cartContents} setCartContents={setCartContents} Inventory={Inventory} />

  return (
    <div className="App">
      <h1 className="title">Brandon's Books</h1>
      <Nav variant='tabs'>
        <Nav.Item><button onClick={() => setCartDisplay(false)}>Inventory</button></Nav.Item>
        <Nav.Item><button onClick={() => setCartDisplay(true)}>Cart</button></Nav.Item>
      </Nav>
      {display()}
    </div>
  );
}

export default App;
