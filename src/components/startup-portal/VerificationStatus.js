import React from 'react';
import StatusBadge from './StatusBadge.js';

const VerificationStatus = ({ verification, greenMark, companyName }) => {
  if (!verification) return null;

  const getVerificationIcon = (status) => {
    switch (status) {
      case 'verified':
        return { icon: 'fas fa-shield-check', color: '#10B981' };
      case 'pending':
        return { icon: 'fas fa-shield-exclamation', color: '#F59E0B' };
      default:
        return { icon: 'fas fa-shield', color: '#6B7280' };
    }
  };

  const verificationIcon = getVerificationIcon(verification.status);

  const documentLabels = {
    kyc: 'KYC Verification',
    incorporation: 'Company Incorporation',
    capTable: 'Capitalization Table',
    banking: 'Banking Setup',
    agreements: 'Legal Agreements',
    compliance: 'Regulatory Compliance'
  };

  return (
    <div className="verification-status-card">
      <div className="verification-header">
        <h3>Verification Status</h3>
        {greenMark && (
          <div className="verification-badge">
            <i className="fas fa-check-circle"></i>
            <span>Verified Partner</span>
          </div>
        )}
      </div>
      
      <div className="verification-status-info">
        <div className="status-overview">
          <span className="status-label">Overall Status:</span>
          <StatusBadge status={verification.status} />
        </div>
        
        {verification.verifiedDate && (
          <div className="verified-date">
            <i className="fas fa-calendar-check"></i>
            <span>
              Verified on {new Date(verification.verifiedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        )}
      </div>

      <div className="verification-documents">
        <h4>Document Status</h4>
        <div className="document-list">
          {Object.entries(verification.documents || {}).map(([docKey, status]) => (
            <div key={docKey} className="document-item">
              <div className="document-info">
                <span className="document-name">
                  {documentLabels[docKey] || docKey.toUpperCase()}
                </span>
              </div>
              <StatusBadge status={status} />
            </div>
          ))}
        </div>
      </div>

      {verification.status === 'pending' && (
        <div className="verification-actions">
          <div className="action-note">
            <i className="fas fa-info-circle"></i>
            <p>
              Complete pending document submissions to achieve verified status and unlock funding.
            </p>
          </div>
        </div>
      )}

      {verification.status === 'verified' && greenMark && (
        <div className="verified-benefits">
          <h4>Verified Partner Benefits</h4>
          <ul className="benefits-list">
            <li>
              <i className="fas fa-bolt"></i>
              <span>Priority processing for future funding rounds</span>
            </li>
            <li>
              <i className="fas fa-users"></i>
              <span>Access to Miebach Venture network and resources</span>
            </li>
            <li>
              <i className="fas fa-chart-line"></i>
              <span>Enhanced investment tracking and reporting</span>
            </li>
            <li>
              <i className="fas fa-handshake"></i>
              <span>Preferential terms for follow-on investments</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default VerificationStatus;