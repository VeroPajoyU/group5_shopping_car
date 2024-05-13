// ProductCard.jsx --> Carta individual de producto.
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://dqp736wsu6w3m.cloudfront.net/s3bucket/w300/looks/1167/advgasds.jpg"  /> {/* src={product.image} */}
      <Card.Body>
        <Card.Title>{product.product}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>${product.price}</Card.Text>
        <Button variant="primary">View Details</Button>
        <Button variant="success">Add Cart</Button>
        <Button variant="warning">Add Favorite</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;