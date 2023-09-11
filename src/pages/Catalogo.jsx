import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logocomp from '../assets/HHMlogo.png'
import { Button} from 'react-bootstrap';
import "../components/horario/style.css"
import CardList from '../components/cards_list';

import NavBar from '../components/nav_bar'

export const Catalogo = () => {
  const [filters, setFilters] = useState([]);

  const cards = [
        {title: 'Libro 1', description: 'Descripción del libro 1', category: 'Libros',},
        {title: 'Libro 2', description: 'Descripción del libro 2', category: 'Libros',},
        {title: 'Libro 3', description: 'Descripción del libro 3', category: 'Libros',},
        {title: 'Libro 4', description: 'Descripción del libro 4', category: 'Libros',},
        {title: 'Libro 5', description: 'Descripción del libro 5', category: 'Libros',},
        {title: 'Libro 6', description: 'Descripción del libro 6', category: 'Libros',},
        {title: 'Libro 7', description: 'Descripción del libro 7', category: 'Libros',},
        {title: 'Libro 8', description: 'Descripción del libro 8', category: 'Libros',},
        {title: 'Libro 9', description: 'Descripción del libro 9', category: 'Libros',},
        {title: 'Libro 10', description: 'Descripción del libro 10', category: 'Libros',},
        {title: 'Equipo 1', description: 'Descripción del equipo 1', category: 'Equipos',},
        {title: 'Equipo 2', description: 'Descripción del equipo 2', category: 'Equipos',},
        {title: 'Equipo 3', description: 'Descripción del equipo 3', category: 'Equipos',},
        {title: 'Equipo 4', description: 'Descripción del equipo 4', category: 'Equipos',},
        {title: 'Equipo 5', description: 'Descripción del equipo 5', category: 'Equipos',},
        {title: 'Equipo 6', description: 'Descripción del equipo 6', category: 'Equipos',},
        {title: 'Equipo 7', description: 'Descripción del equipo 7', category: 'Equipos',},
        {title: 'Herramienta 1', description: 'Descripción de la herramienta 1', category: 'Herramientas',},
        {title: 'Herramienta 2', description: 'Descripción de la herramienta 2', category: 'Herramientas',},
        {title: 'Herramienta 3', description: 'Descripción de la herramienta 3', category: 'Herramientas',},
        {title: 'Herramienta 4', description: 'Descripción de la herramienta 4', category: 'Herramientas',},
        {title: 'Herramienta 5', description: 'Descripción de la herramienta 5', category: 'Herramientas',},
      ];
  
  const handleFilterChange = (event) => {
    const value = event.target.value;
    if (filters.includes(value)) {
      setFilters(filters.filter(filter => filter !== value));
    } else {
      setFilters([...filters, value]);
    }
  };

  const cardMatchesFilters = (card) => {
    if (filters.length === 0) {
      return true;
    }
    return filters.includes(card.category);
  };

  const filteredCards = cards.filter(cardMatchesFilters);

  return (
    <div className='page'>
      <div className="d-flex align-items-center">
        <img src={Logocomp} alt='Logo' className='logo' />
        <h1 className='page__title'>HHM</h1>
      </div>
      <NavBar />
      <h2>C&aacute;talogo</h2>

      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <h3>Filtrar por:</h3>
            <div className="filter-buttons">
              <form>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="Libros"
                    value="Libros"
                    checked={filters.includes('Libros')}
                    onChange={handleFilterChange}
                  />
                  <label className="form-check-label" htmlFor="Libros">
                    Libros
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="Equipos"
                    value="Equipos"
                    checked={filters.includes('Equipos')}
                    onChange={handleFilterChange}
                  />
                  <label className="form-check-label" htmlFor="Equipos">
                    Equipos
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="Herramientas"
                    value="Herramientas"
                    checked={filters.includes('Herramientas')}
                    onChange={handleFilterChange}
                  />
                  <label className="form-check-label" htmlFor="Herramientas">
                    Herramientas
                  </label>
                </div>
              </form>
              <button className="filter-button" onClick={() => handleFilter('all')}>Mostrar Todo</button>
            </div>
          </div>
          <div className="col-md-9">
            <CardList cards={filteredCards} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogo