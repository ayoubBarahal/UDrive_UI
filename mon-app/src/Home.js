import { useState } from "react";
import './Home.css';
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const [formData, setFormData] = useState({
    pickupAddress: "", 
    pickupDate: "",
    dropOffAddress: "", 
    dropOffDate: "",
  });

  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState(null);  
  const [success, setSuccess] = useState(false);  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); 
    setError(null);  

    // Storing data in sessionStorage instead of sending to the API
    try {
      sessionStorage.setItem('reservationData', JSON.stringify(formData)); // Store form data in session

      setSuccess(true);
      setFormData({ pickupAddress: "", pickupDate: "", dropOffAddress: "", dropOffDate: "" });  
      navigate("/Cars"); // Navigate to the cars page (or wherever you need)

    } catch (error) {
      setError('Erreur lors de l\'enregistrement des données dans la session.');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Car Reservation</h1>
        <p>Enter your information to reserve a car</p>
      </header>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Pickup Address</label>
          <input
            type="text"
            name="pickupAddress"
            value={formData.pickupAddress}
            onChange={handleChange}
            placeholder="Enter pickup address"
            required
          />
        </div>
        <div className="input-group">
          <label>Pickup Date</label>
          <input
            type="datetime-local"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Drop-off Address</label>
          <input
            type="text"
            name="dropOffAddress"
            value={formData.dropOffAddress}
            onChange={handleChange}
            placeholder="Enter drop-off address"
            required
          />
        </div>
        <div className="input-group">
          <label>Drop-off Date</label>
          <input
            type="datetime-local"
            name="dropOffDate"
            value={formData.dropOffDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Submitting...' : 'Reserve'}
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">Reservation data saved in session!</div>}
    </div>
  );
};

export default Home;
