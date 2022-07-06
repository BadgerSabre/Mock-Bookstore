import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Store = (props) => {
    
    const displayStore = props.Inventory.map((book, i) => {
        return(
            <ListGroup.Item className='mt-3' key={i}>
                <div>Title: {book.title}</div>
                <div>Price: {book.price}</div>
                <Button onClick={() => {
                    props.setCartContents([...props.cartContents, book])
                    console.log(props.cartContents)
                    }}>Add to cart</Button>
            </ListGroup.Item>
        )
    })

    return (
        <div>
            <Container>
                <Card className="mt-3">
                    <Card.Body >
                        <Card.Title>Our Books</Card.Title>
                        <Card.Text>Check out our inventory!</Card.Text>
                    </Card.Body>
                </Card>
                <ListGroup>
                    {displayStore}
                </ListGroup>
            </Container>
        </div>
    )
}

export default Store