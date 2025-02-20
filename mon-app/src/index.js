import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import Welcome from './Welcome';
import SignUp from './SignUp';
import reportWebVitals from './reportWebVitals';
import AdminHome from './AdminHome';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import Home from './Home';
import Cars from './Cars';
import CarDetails from './CarDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<App />} />
        <Route element={<PrivateRoute />}>
            <Route path="/Welcome" element={<Welcome />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Cars" element={<Cars />} />
            <Route path="/CarDetails" element={<CarDetails />} />
                <Route element={<AdminRoute />}>
                    <Route path="/AdminHome" element={<AdminHome />} />
                </Route>
        </Route>

        <Route path="/SignUp" element={<SignUp />} />
        <Route path="*" element={<h1 style={{ color: "white" }}>Page non trouvée</h1>} />

      </Routes>
    </Router>  
    </React.StrictMode>
);


reportWebVitals();
