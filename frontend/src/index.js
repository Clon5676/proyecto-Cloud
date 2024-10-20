import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Asegúrate de tener un componente App

const Main = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://vwfkz54w5e.execute-api.us-east-1.amazonaws.com/default/ufm');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBooks(data.Items); // Asegúrate de que 'Items' sea la clave correcta
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <img src="logo_b.png" alt="Logo B" />
      <div className="container">
        {error && <p>{error}</p>}
        {books.map((book) => (
          <div className="card" key={book.BookName}> 
            <h1>{book.BookName}</h1> 
            <p>Release date: {book.ReleaseDate}</p>
            <p>Authors: {book.Actors}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Renderiza el componente principal en el div root
ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
