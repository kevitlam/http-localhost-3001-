import React, { useState } from 'react';
import { StartupAuthProvider, useStartupAuth } from '../../contexts/StartupAuthContext.js';
import StartupLogin from './StartupLogin.js';
import StartupDashboard from './StartupDashboard.js';
import './startup-portal.css';

const StartupPortalContent = () => {
  const { isAuthenticated, login, getLastLoginError } = useStartupAuth();

  const handleLogin = async (username, password) => {
    try {
      const success = await login(username, password);
      if (success) {
        return { success: true };
      } else {
        const error = getLastLoginError() || 'Login failed. Please try again.';
        return { success: false, error };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Authentication error. Please try again.' };
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="startup-portal">
        <div className="portal-landing">
          <div className="landing-header">
            <div className="header-content">
              <h1>Miebach Venture Portfolio Portal</h1>
              <p>Access your investment dashboard and track funding progress in real-time</p>
            </div>
          </div>
          
          <div className="portal-features">
            <div className="feature-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Investment Tracking</h3>
                <p>Monitor committed amounts, received funds, and pending disbursements</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-shield-check"></i>
                </div>
                <h3>Verification Status</h3>
                <p>Track legal compliance requirements and verification progress</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h3>Real-time Updates</h3>
                <p>Get instant notifications on funding milestones and requirements</p>
              </div>
            </div>
          </div>
        </div>
        
        <StartupLogin onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="startup-portal authenticated">
      <StartupDashboard />
    </div>
  );
};

const StartupPortal = () => {
  return (
    <StartupAuthProvider>
      <StartupPortalContent />
    </StartupAuthProvider>
  );
};

export default StartupPortal;