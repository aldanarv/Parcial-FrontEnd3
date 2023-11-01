import React from 'react';
import '../Styles/Card.css';

const Card = ({ nombre, cancionFavorita }) => {
  return (
    <div className="card-container">
      <h2>¡Bienvenida/o a este club de fanáticos de la música!</h2>
      <p>Gracias {nombre} por compartir tu canción favorita.</p>
      <p>Tu canción favorita es: {cancionFavorita}</p>
    </div>
  );
};

export default Card;