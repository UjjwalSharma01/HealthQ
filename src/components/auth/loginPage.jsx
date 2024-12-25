// LoginPage.jsx
import React, { useState } from 'react';
import './loginPage.css';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const [isLoading, setIsLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('signin');

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Form submitted:', formData);
            // Add your authentication logic here
        } catch (error) {
            console.error('Login error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                {/* Header Section */}
                <div className="login-header">
                    <h1 className="login-title">HealthClaims</h1>
                    <p className="login-subtitle">Healthcare Claims Management</p>
                </div>

                {/* Tabs Section */}
                <div className="tab-container">
                    <button 
                        className={`tab ${activeTab === 'signin' ? 'active' : ''}`}
                        onClick={() => setActiveTab('signin')}
                    >
                        Sign In
                    </button>
                    <button 
                        className={`tab ${activeTab === 'register' ? 'active' : ''}`}
                        onClick={() => setActiveTab('register')}
                    >
                        Register
                    </button>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-input"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-input"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    {/* Remember Me and Forgot Password Row */}
                    <div className="form-options">
                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                name="rememberMe"
                                className="checkbox-input"
                                checked={formData.rememberMe}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="rememberMe" className="checkbox-label">
                                Remember me
                            </label>
                        </div>
                        <button 
                            type="button" 
                            className="text-link forgot-password"
                            onClick={() => console.log('Forgot password clicked')}
                        >
                            Forgot password?
                        </button>
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className={`submit-button ${isLoading ? 'loading' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Signing In...' : 'Sign In'}
                    </button>

                    {/* Create Account Link */}
                    <div className="create-account">
                        <p>
                            Need an account?{' '}
                            <button 
                                type="button"
                                className="text-link"
                                onClick={() => setActiveTab('register')}
                            >
                                Create one
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;