import React from 'react';
import '../../style.css';
import propTypes from 'prop-types';
import { IconTrash } from '@tabler/icons-react';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import { cartPesosQuantity } from '../../services/utils';

const CartList = ({ productos }) => {
  const { cart, removeItem, clear, mas, menos } = useContext(CartContext);
  const precioTotal = cartPesosQuantity(cart);

  return (
    <>
      <div className="table-responsive">
        <div className="bg-light">
          <div className="table-responsive">
            <table className="table table-striped-columns table-hover mb-3">
              <thead>
                <tr>
                  <th align="center">Producto</th>
                  <th align="center">Precio</th>
                  <th align="center">-</th>
                  <th align="center">Cantidad</th>
                  <th align="center">+</th>
                  <th align="center">Total ($)</th>
                </tr>
              </thead>
              <tbody id="tablaAlimentos">
                {productos.map((item, i) => (
                  <tr key={i}>
                    <td>{item.titulo}</td>
                    <td align="center">{item.precio}</td>
                    <td align="center">
                      <button
                        className="btn btn-primary me-2"
                        onClick={() => menos(item.id)}
                      >
                        -
                      </button>
                    </td>
                    <td align="center">{item.cantidad}</td>
                    <td align="center">
                      <button
                        className="btn btn-primary me-2"
                        onClick={() => mas(item.id)}
                      >
                        +
                      </button>
                    </td>
                    <td align="right">{item.cantidad * item.precio}</td>
                    <td align="right">
                      <IconTrash
                        onClick={() => removeItem(item.id)}
                        className="me-2"
                        size={40}
                        id={i}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="fs-6 fw-bolder text-center ">
                {precioTotal > 0 ? 'Total $: ' + precioTotal : ''}
              </p>
            <div className="d-flex justify-content-end col-sm-10">
              <button className="btn btn-success me-2">Realizar Pedido</button>
              <button onClick={() => clear()} className="btn btn-danger me-2">
                Vaciar Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
CartList.propTypes = {
  productos: propTypes.array,
};

export default CartList;
