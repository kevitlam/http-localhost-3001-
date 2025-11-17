import React, { useState, useEffect } from 'react';
import StartupAuthService from '../../services/StartupAuthService.js';

const StartupLogin = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showDemoCredentials, setShowDemoCredentials] = useState(false);

  // Get demo credentials for development
  useEffect(() => {
    const authService = StartupAuthService.getInstance();
    const demoCredentials = authService.getDemoCredentials();
    
    // Auto-fill demo credentials in development
    if (process.env.NODE_ENV === 'development') {
      setFormData(demoCredentials);
      setShowDemoCredentials(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Call the parent's login handler and await the result
      const result = await onLogin(formData.username, formData.password);
      
      if (!result.success) {
        setError(result.error || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Authentication error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="startup-login-container">
      <div className="startup-login-box">
        <div className="startup-login-header">
          <div className="startup-login-icon">
            <i className="fas fa-building"></i>
          </div>
          <h2>Portfolio Company Portal</h2>
          <p>Access your investment dashboard and track funding progress</p>
        </div>

        <form onSubmit={handleSubmit} className="startup-login-form">
          <div className="form-group">
            <label htmlFor="username">Company Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your assigned company username"
              className={error ? 'error' : ''}
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={error ? 'error' : ''}
              required
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="error-message">
              <i className="fas fa-exclamation-triangle"></i>
              {error}
            </div>
          )}

          <button 
            type="submit" 
            className="btn btn-primary startup-login-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                Signing In...
              </>
            ) : (
              <>
                <i className="fas fa-sign-in-alt"></i>
                Access Portfolio
              </>
            )}
          </button>
        </form>

        <div className="startup-login-footer">
          {showDemoCredentials && (
            <div className="demo-credentials">
              <p>
                <i className="fas fa-flask"></i>
                <strong>Development Mode:</strong> Demo credentials pre-filled
              </p>
              <small>Username: {formData.username} | Password: {formData.password}</small>
            </div>
          )}
          <p>
            <i className="fas fa-info-circle"></i>
            Don't have credentials? Contact Miebach Venture for your portfolio access.
          </p>
        </div>

        <div className="startup-login-info">
          <div className="info-grid">
            <div className="info-item">
              <i className="fas fa-chart-line"></i>
              <div>
                <h4>Investment Tracking</h4>
                <p>Monitor your funding status and disbursements</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-shield-check"></i>
              <div>
                <h4>Verification Status</h4>
                <p>Track legal compliance and requirements</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-clock"></i>
              <div>
                <h4>Real-time Updates</h4>
                <p>Get instant updates on funding progress</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupLogin;