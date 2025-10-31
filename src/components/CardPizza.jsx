import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {
  
  const formatPrice = (value) => {
    return value.toLocaleString('es-CL');
  };

  return (
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={`Pizza ${name}`} />
      <div className="card-body">
        <h5 className="card-title text-capitalize fw-bold">{name}</h5>
        <hr />
        <p className="card-text"><b>Ingredientes:</b></p>
        <ul>
          {}
          {ingredients.map((ingredient, index) => (
            <li key={index} className="text-capitalize">
              🍕 {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div className="card-footer text-center bg-white border-0 pb-2">
        <h4 className="mb-3">Precio: ${formatPrice(price)}</h4>
        
        {}
        <button className="btn btn-info mx-1">Ver Más</button>
        <button className="btn btn-danger mx-1">Añadir</button>
      </div>
    </div>
  );
};

export default CardPizza;