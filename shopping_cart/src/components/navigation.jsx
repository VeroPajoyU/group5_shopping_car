import { GoPerson } from "react-icons/go";
import { GrFavorite } from "react-icons/gr";
import { LuShoppingCart } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephoneOutbound } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFaceGrinStars } from "react-icons/fa6";
import logo from "../assets/logo_white.png";

function Navigation() {
  //OPTIONS OF LINKS
  const links = [
    {
      icon: <GoPerson />,
      desc: "Profile",
    },
    {
      icon: <GrFavorite />,
      desc: "Favorite",
    },
    {
      icon: <LuShoppingCart />,
      desc: "Cart",
    },
  ];
  return (
    <section className="mx-auto fixed-top">
      {/* Navegador de publicidad y contactos */}
      <div>
        <nav className="navbar bg-dark text-white" data-bs-theme="dark">
          <div className="col-4 px-4">
            {/* <marquee direction=""> <BsTelephoneOutbound /> +57 3127354881 <HiOutlineMail /> </marquee> */}
            <BsTelephoneOutbound /> +57 3189439830 <HiOutlineMail />
          </div>
          <div className="col-4 px-4">
            <marquee direction="">
              <FaFaceGrinStars /> For Mother´s Month, 40% off throughout the
              store until May 12 and 19. <FaFaceGrinStars />
            </marquee>
          </div>
          <div className="col-4 px-4">
            {/* <marquee direction="">Siguenos: <FaFacebook /> <RiInstagramFill /> <FaSquareTwitter /> </marquee> */}
            Follow us: <FaFacebook /> <RiInstagramFill /> <FaSquareTwitter />
          </div>
        </nav>
      </div>

      {/* Navegador de busqueda y opciones de Perfil, Lista de favoritos y Carrito de compras */}
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid ">
            {/* Se crea la el boton de amburguesa para pantallas pequeñas */}
            <a
              className="navbar-brand mx-auto col-4 justify-content-evenly"
              href="#"
            >
              <img src={logo} alt="Boutique" width={270} height={40} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse grid gap-3"
              id="navbarSupportedContent"
            >
              {/* Primera columna para la barra de búsqueda */}
              <div className="mx-auto col-md-6 p-2">
                <form className="d-flex" role="search">
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search products"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-primary" type="submit">
                      Search
                    </button>
                  </div>
                </form>
              </div>

              {/* Segunda columna para los enlaces */}
              <div className="mx-auto g-col-4 p-2 text-end">
                {" "}
                {/* Usamos col-4 para ocupar 1/3 del ancho */}
                <div className="container">
                  <div className="d-flex justify-content-evenly">
                    {links.map((link, index) => (
                      <a key={index} href="#" alt={link.desc}>
                        <h2>{link.icon}</h2>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Navegador de opciones de busqueda por categorias */}
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid navbar-brand mx-auto">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Women
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Men
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Children
                      </a>
                    </li>{" "}
                    <li>
                      <a className="dropdown-item" href="#">
                        Girls
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Women
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Men
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Children
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Girls
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Navigation;
