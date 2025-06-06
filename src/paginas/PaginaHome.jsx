import "../styles/Home.css";
import tienda from "../assets/img/tienda.png";

const PaginaHome = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
    <div className="home-card">
      <img src={tienda} className="card-img-top mb-3 home-img" alt="tiendita" />
      <div className="text-center">
        <h1 className="mb-2 home-title">
          Bienvenido a <strong>Mi Tiendita</strong>
        </h1>
        <p className="text-secondary mb-0">
          ¡Explora nuestros productos y disfruta de la mejor experiencia de compra!
        </p>
      </div>
    </div>
  </div>
);

export default PaginaHome;