import React from 'react';

const Navbar = () => {
  // Variables requeridas 
  const total = 25000;
  const token = false; // Cambia a 'true' para probar el otro estado

  // Función para formatear el total [cite: 66, 67]
  const formatPrice = (value) => {
    return value.toLocaleString('es-CL'); // 'es-CL' usa el punto como separador de miles
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          🍕 Pizzería Mamma Mia!
        </a>
        <div className="d-flex">
          <ul className="navbar-nav flex-row">
            {/* Requerimiento 4: Botón Home siempre visible [cite: 68] */}
            <li className="nav-item">
              <button className="btn btn-outline-info mx-1">Home</button>
            </li>

            {/* Requerimiento 3: Lógica condicional con operador ternario  */}
            {token ? (
              <>
                {/* Si token es true */}
                <li className="nav-item">
                  <button className="btn btn-outline-light mx-1">Profile</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light mx-1">Logout</button>
                </li>
              </>
            ) : (
              <>
                {/* Si token es false */}
                <li className="nav-item">
                  <button className="btn btn-outline-light mx-1">Login</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light mx-1">Register</button>
                </li>
              </>
            )}

            {/* Requerimiento 4: Botón Total siempre visible [cite: 68] */}
            <li className="nav-item">
              <button className="btn btn-success mx-1">
                Total: ${formatPrice(total)} {/* [cite: 40, 65, 66] */}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;