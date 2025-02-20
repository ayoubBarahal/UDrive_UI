import React, { useEffect, useState } from 'react';
import './CarDetails.css';

const CarDetails = () => {
  const [car, setCar] = useState(null);
  const [reservationData, setReservationData] = useState(null);

  useEffect(() => {
    const storedCar = sessionStorage.getItem('selectedCar');
    if (storedCar) {
      setCar(JSON.parse(storedCar));
    }
  }, []);

  useEffect(() => {
    const ReservData = sessionStorage.getItem('reservationData');
    if (ReservData) {
      setReservationData(JSON.parse(ReservData));
    }
  }, []);

  const handleConfirmReservation = () => {
    alert("✅ Réservation confirmée avec succès !");
  };

  if (!car) {
    return <p className="error-message">Aucune voiture sélectionnée.</p>;
  }

  return (
    <div className="background-img">
      <div className="container">
        
        {/* Informations sur la voiture */}
        <div className="box car-box">
          <h2>🚗 {car.nom}</h2>
          <p><strong>Modèle :</strong> {car.model}</p>
          <p><strong>Prix :</strong> €{car.price}</p>
          <p><strong>Type :</strong> {car.type}</p>
          <p><strong>Catégorie :</strong> {car.category}</p>

                   <p><strong>Adresse de prise en charge :</strong> {reservationData.pickupAddress}</p>
            <p><strong>Date de prise en charge :</strong> {reservationData.pickupDate}</p>
            <p><strong>Adresse de dépôt :</strong> {reservationData.dropOffAddress}</p>
            <p><strong>Date de dépôt :</strong> {reservationData.dropOffDate}</p>

            
          </div>
          <button className="confirm-btn" onClick={handleConfirmReservation}>
              Confirmer la réservation
            </button>
      </div>
    </div>
  );
};

export default CarDetails;
