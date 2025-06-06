import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

const inicialState = [];

const comprasReducer = (state = inicialState, action = {}) => {
  switch (action.type) {
    case "[CARRITO] AGREGAR_COMPRA":
      return [...state, action.payload];
    case "[CARRITO] AUMENTAR_CANTIDAD_COMPRA":
      return state.map(compra =>{
        const nuevaCantidad = compra.cantidad + 1;
        if(compra.id === action.payload) return {
            ...compra, cantidad: nuevaCantidad
        }
        return compra;
      }
        
      );
    case "[CARRITO] DISMINUIR_CANTIDAD":
      return state.map(compra =>{
        const nuevaCantidad = compra.cantidad - 1;
        if(compra.id === action.payload && compra.cantidad>1) return {
            ...compra, cantidad: nuevaCantidad
        }
        return compra; 
      }
        
      );
    case "[CARRITO] ELIMINAR_COMPRA":
      return state.filter(compra => compra.id !== action.payload);
    default:
      return state;
  }
};

const CarritoProvider = ({ children }) => {
  const [listaCompras, dispatch] = useReducer(comprasReducer, inicialState);

  const agregarCompra = (compra) => {
    compra.cantidad = 1; 
    dispatch({
      type: "[CARRITO] AGREGAR_COMPRA",
      payload: compra,
    });
  };
  const aumentarCantidad = (id) => {
    dispatch({
      type: "[CARRITO] AUMENTAR_CANTIDAD_COMPRA",
      payload: id,
    });
  };
  const disminuirCantidad = (id) => {
    dispatch({
      type: "[CARRITO] DISMINUIR_CANTIDAD",
      payload: id,
    });
  };
  const eliminarCompra = (id) => {
    dispatch({
      type: "[CARRITO] ELIMINAR_COMPRA",
      payload: id,
    });
  };

  return (
    <CarritoContext.Provider
      value={{
        listaCompras,
        agregarCompra,
        aumentarCantidad,
        disminuirCantidad,
        eliminarCompra,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;