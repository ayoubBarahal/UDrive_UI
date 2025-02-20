import React, { useState } from "react";
import './SignUp.css'; 
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address,SetAddress]=useState("")
  const [hasDriverLicense, setHasDriverLicense] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { firstName, lastName, age, email, password, phoneNumber,address, hasDriverLicense };

    try {
      const response = await fetch("http://localhost:8080/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setResponseMessage("Inscription réussie !");
        
          navigate("/"); 

      } else {
        const error = await response.json();
        setResponseMessage(error.message || "Échec de l'inscription.");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi des données", error);
      setResponseMessage("Erreur lors de l'inscription.");
    }
  };

  return (
    <div className="background-img">
      <div className="login-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="First Name"
              className="input-field"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Last Name"
              className="input-field"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="number"
              placeholder="Age"
              className="input-field"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Phone Number"
              className="input-field"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Address"
              className="input-field"
              value={address}
              onChange={(e) => SetAddress(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={hasDriverLicense}
                onChange={() => setHasDriverLicense(!hasDriverLicense)}
              />
              Do you have a driver's license?
            </label>
          </div>
          <button type="submit" className="signin-btn">
            Sign Up
          </button>
        </form>
        
        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </div>
  );
}

export default SignUp;
