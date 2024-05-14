import { Card } from "react-bootstrap";
import { FaEye, FaShoppingCart, FaHeart } from "react-icons/fa";
// const isValidImagePath = product.ruta_foto && product.ruta_foto !== 'undefined';

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: "17rem", position: "relative", marginTop: "40px", marginRight: "20px", marginLeft: "20px" }}>
      <Card.Img variant="top" height="360px" src={`../../public/photoProducts/${product.ruta_foto}`} alt={product.product} />
      {/* <Card.Img variant="top" height="360px" src={isValidImagePath ? `../../public/photoProducts/${product.ruta_foto}` : 'default-image.jpg'} alt={product.product} /> */}
      {/* <Card.Img variant="top" src={`/assets/photoProducts/${product.ruta_foto}`}  alt={product.product} /> */}
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
