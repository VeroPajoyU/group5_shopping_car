import fondo1 from "../assets/fondo1.jpg";
import fondo2 from "../assets/fondo2.webp";
import fondo3 from "../assets/fondo3.jpg";
import "../styles/content.css"

function Content() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={fondo1} className="d-block w-100" alt="Boutique" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Boutique Elite Fashion</h5>
            <p>
              El estilo es una forma de decir quien eres sin tener que hablar.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={fondo2} className="d-block w-100" alt="Boutique" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Boutique Elite Fashion</h5>
            <p className="container">
              Olvidate de las reglas si te gusta. ¡Úsalo!
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={fondo3} className="d-block w-100" alt="Boutique" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Boutique Elite Fashion</h5>
            <p>Vistete bien, hoy tienes una cita con el éxito.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default Content;
