import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'

const Store = (props) => {
    const displayStore = props.Inventory.map((book, i) => {
        return(
            <div key={i}>
                <ListGroup.Item>{book.title}</ListGroup.Item>
                <button>Add to cart</button>
            </div>
        )
    })

    return (
        <div>
            <Container>
                <Card>
                    <Card.Body>
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