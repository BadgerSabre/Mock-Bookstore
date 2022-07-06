import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'

const Cart = (props) => {
    const display = props.cartContents.map((book,i) => {
        const handleClick = () => {
            props.deleteItem(i)
            console.log(props.cartContents)
        }

        return (
            <div key={i}>
                <ListGroup.Item>{book.title}</ListGroup.Item>
                <button id={i} name={book.title} onClick={handleClick}>Remove from cart</button>
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