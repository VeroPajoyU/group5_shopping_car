import { Card, Button, Placeholder } from "react-bootstrap";
import { FaEye, FaShoppingCart, FaHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: "20rem", position: "relative", margin: "20px" }}>
      <Card.Img variant="top" src="https://dqp736wsu6w3m.cloudfront.net/s3bucket/w300/looks/1167/advgasds.jpg"/>{/* src={product.image} */}
      <Card.Body>
        <Card.Title>{product.product}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <section className="d-flex align-items-center justify-content-between">
          <h2 className="d-flex align-items-center">${product.price}</h2>
          <div style={{ display: "flex", alignItems: "flex-end"}}>
            <FaEye size={35} color="blue" title="Ver detalle" className="me-3"/>
            <FaShoppingCart size={35} color="green" title="Añadir al carrito" />
          </div>
        </section>
        <FaHeart
          size={35}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            transform: "translateY(-50%)",
            filter: "drop-shadow(2px 2px 2px black)",
          }}
          color={"white"}
          hoverColor={"red"}
          title="Añadir a favoritos"
        />
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
