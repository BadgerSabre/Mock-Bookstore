import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const Cart = (props) => {
    const display = props.cartContents.map((book,i) => {
        const handleClick = () => {
            props.deleteItem(book.title)
            console.log(props.cartContents)
        }

        return (
            <div key={i}>
                <ListGroup.Item>
                    <h4>{book.title}</h4>
                    <br></br>
                    <Button variant='danger' id={i} name={book.title} onClick={handleClick}>Remove from cart</Button>
                </ListGroup.Item>
            </div>
        )
    })

    return (
        <div>
            <Container>
                <ListGroup>
                    {display}
                </ListGroup>
            </Container>
        </div>
    )
}

export default Cart