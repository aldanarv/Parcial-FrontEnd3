import React, { useState } from 'react';
import Card from './Card';
import '../Styles/Formulario.css'

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [cancionFavorita, setCancionFavorita] = useState('');
  const [error, setError] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nombre.length < 3 || nombre.startsWith(' ') || cancionFavorita.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      setShowCard(false);
    } else {
      setError('');
      setShowCard(true);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Mi nombre es:</label>
        <input
          type="text"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />

        <label>Mi canción favorita:</label>
        <input
          type="text"
          value={cancionFavorita}
          onChange={(event) => setCancionFavorita(event.target.value)}
        />

        <button type="submit">Enviar datos</button>
      </form>

      {error && <p className="error-message">{error}</p>}
      {showCard && <Card nombre={nombre} cancionFavorita={cancionFavorita} />}
    </div>
  );
};

export default Formulario;
