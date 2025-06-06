import "../styles/Carrito.css";

import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

const PaginaCarrito = () => {
  const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext);

  const calcularTotal = () => {
    return listaCompras.reduce(
      (total, compra) => total + compra.price * compra.cantidad,
      0
    ).toFixed(2);
  };

  const handleImprimir = () => {
    print();
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-success fw-bold">🛒 Tu Carrito</h2>
      <div className="table-responsive rounded shadow-sm">
        <table className="table align-middle table-bordered bg-white">
          <thead className="table-success">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col" className="text-center">Cantidad</th>
              <th scope="col" className="text-center">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {listaCompras.map((compra) => (
              <tr key={compra.id}>
                <td className="fw-semibold">{compra.title}</td>
                <td>${compra.price}</td>
                <td className="text-center">
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={() => disminuirCantidad(compra.id)}
                    >
                      -
                    </button>
                    <span className="badge bg-success text-white fs-6 px-3">
                      {compra.cantidad}
                    </span>
                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={() => aumentarCantidad(compra.id)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="text-center">
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => eliminarCompra(compra.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
            <tr className="table-light">
              <td colSpan={2} className="fw-bold text-end">
                TOTAL:
              </td>
              <td colSpan={2} className="fw-bold text-success fs-5">
                ${calcularTotal()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-success btn-lg px-5"
          onClick={handleImprimir}
          disabled={listaCompras.length === 0}
        >
          Realizar Compra
        </button>
      </div>
    </div>
  );
};

export default PaginaCarrito;