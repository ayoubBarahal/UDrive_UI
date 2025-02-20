import React, { useEffect, useState } from 'react';
import './Cars.css';
import { useNavigate } from 'react-router-dom';

const Cars = () => {
  const [cars, setCars] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/api/Cars')  
      .then(response => response.json())    
      .then(data => {
        setCars(data);  
        setLoading(false);  
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
        setError("Failed to load cars. Please try again later.");
        setLoading(false);
      });
  }, []);  

  if (loading) {
    return <div className="loading-text">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }
  const handleCarClick = (car) => {
    sessionStorage.setItem('selectedCar', JSON.stringify(car));
    navigate('/CarDetails'); 
  };

  return (
    <div className="background-img">
      <header>
        <h1>Browse Available Cars</h1> 
      </header>

      <div className="car-container">
        {cars.map(car => (
          <div key={car.id_car} className="car-box" onClick={() => handleCarClick(car)} >
            <h2>{car.model}</h2>
            <p>Type: {car.type}</p>
            <p>Price: €{car.price}</p> {/* Affichage du prix avec le symbole euro */}
            <p>Category: {car.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
