import React from 'react';

const PortalHeader = ({ companyInfo, greenMark, onLogout }) => {
  if (!companyInfo) return null;

  return (
    <header className="portal-header">
      <div className="header-container">
        <div className="header-left">
          <div className="company-identity">
            <div className="company-details">
              <h1 className="company-name">{companyInfo.name}</h1>
              <div className="company-meta">
                <span className="founder-name">{companyInfo.founder}</span>
                <span className="separator">•</span>
                <span className="company-stage">{companyInfo.stage}</span>
                {greenMark && (
                  <>
                    <span className="separator">•</span>
                    <div className="verified-badge">
                      <i className="fas fa-check-circle"></i>
                      <span>Verified</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="header-center">
          <div className="portal-branding">
            <span className="portal-title">Miebach Venture</span>
            <span className="portal-subtitle">Portfolio Portal</span>
          </div>
        </div>

        <div className="header-right">
          <div className="user-actions">
            <div className="user-info">
              <span className="username">{companyInfo.name}</span>
              <span className="user-email">{companyInfo.email}</span>
            </div>
            
            <button 
              className="logout-button"
              onClick={onLogout}
              title="Sign out"
            >
              <i className="fas fa-sign-out-alt"></i>
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      {greenMark && (
        <div className="verification-banner">
          <div className="banner-content">
            <i className="fas fa-shield-check"></i>
            <span>
              {companyInfo.name} is a verified portfolio company with priority access to Miebach Venture resources
            </span>
          </div>
        </div>
      )}
    </header>
  );
};

export default PortalHeader;