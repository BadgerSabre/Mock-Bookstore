import { useState } from 'react'
import './App.css';
import Nav from 'react-bootstrap/Nav'
import Inventory from './Inventory'
import Store from './Components/Store'
import Cart from './Components/Cart'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function App() {
  const [cartContents, setCartContents] = useState([])
  const [cartDisplay, setCartDisplay] = useState(false)

  function deleteItem(title) {
    setCartContents(cartContents.filter(item => {
      return (item.title !== title)
    }))
  }

  const display = () => cartDisplay ? <Cart deleteItem={deleteItem} cartContents={cartContents} setCartContents={setCartContents} /> : <Store cartContents={cartContents} setCartContents={setCartContents} Inventory={Inventory} />

  return (
    <div className="App">
      <div id='header'>
        <h1 className="title">Brandon's Books</h1>
        <Nav id='nav' variant='tabs'>
          <Container>
            <Row>
              <Col></Col>
              <Col className="navItem">
                <Nav.Item><Button onClick={() => setCartDisplay(false)}>Inventory</Button></Nav.Item>
              </Col>
              <Col className="navItem">
                <Nav.Item><Button onClick={() => setCartDisplay(true)}>Cart</Button></Nav.Item>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Nav>
      </div>
      <div id='display'>
        {display()}
      </div>
    </div>
  );
}

export default App;
