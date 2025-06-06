import "../styles/Home.css";
import "../styles/NavBar.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";



const Navbar = () => {
  const {listaCompras} = useContext(CarritoContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/"><strong>Mi Tiendita</strong></Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 justify-content-center">
  <li className="nav-item">
    <Link className="nav-link" to="/products"><strong>Productos</strong></Link>
  </li>
  <li className="nav-item carrito">
    <Link className="nav-link d-flex align-items-center justify-content-center gap-2" to="/cart">
      <span style={{ fontSize: "1.6rem", lineHeight: "0.9" }}>🛒</span>
      <span className="badge bg-warning text-dark" style={{ fontSize: "0.9rem", padding: "0.5em 0.8em" }}>
        {listaCompras.length}
      </span>
    </Link>
  </li>
</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;