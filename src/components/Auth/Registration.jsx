// src/components/Auth/Registration.jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const { register } = useContext(AuthContext); // Ensure you're using the correct context
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormVisible, setFormVisible] = useState(false); // State to control visibility
    const navigate = useNavigate(); // Use this for navigation after registration

    const handleSubmit = (e) => {
        e.preventDefault();
        register(email, password);
        navigate('/'); // Redirect after registration
    };

    return (
        <div>
            <button onClick={() => setFormVisible(true)}>Register</button> {/* Button to display form */}
            {isFormVisible && ( // Conditionally render the form
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">Register</button>
                </form>
            )}
        </div>
    );
};

export default Registration;
