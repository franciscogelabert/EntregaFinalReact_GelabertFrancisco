import React from 'react';
import propTypes from 'prop-types';
import '../../style.css';
import { Link } from 'react-router-dom';


const ItemList = ({ productos, isLoading }) => {

  if (isLoading) {
    return <h2 className="bg-info">Preparando...</h2>;
  } else {
    return (
      <>
        {productos.map((item, i) => (
          <article key={i} className="col-sm-12 col-md-6 col-lg-3 mt-3">
            <div className="card gradiente">
              <h3>{item.titulo}</h3>
              <Link to={`/item/${item.id}`}>
                {' '}
                <img
                  src={item.ubicacion}
                  className="imagenReceta card-img-top w-100 mx-auto p-2"
                  alt={item.alt}
                />
              </Link>
              <div className="card-body">
                <p className="precio"> Precio $ {item.precio} </p>
              </div>
              <Link to={`/item/${item.id}`}>
                <button className="btn btn-primary me-2 mt-200">Ver Producto</button>
              </Link>
            </div>
          </article> 
        ))}
      </>
    );
  }
};

ItemList.propTypes = {
  productos: propTypes.array.isRequired,
  isLoading: propTypes.bool,
};

export default ItemList;
