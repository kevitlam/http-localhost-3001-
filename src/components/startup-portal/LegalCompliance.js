import React from 'react';
import StatusBadge from './StatusBadge.js';

const LegalCompliance = ({ legalCompliance, pendingAmount, nextDisbursement, isCompleted }) => {
  if (!legalCompliance) return null;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const requirementLabels = {
    kyc: 'KYC Verification',
    incorporation: 'Company Incorporation Documents',
    capTable: 'Current Capitalization Table',
    banking: 'Banking Information & Setup',
    agreements: 'Investment Agreement Signatures',
    compliance: 'Regulatory Compliance Verification'
  };

  const getRequirementDescription = (requirement) => {
    const descriptions = {
      kyc: 'Identity verification for all key stakeholders',
      incorporation: 'Certificate of incorporation and company bylaws',
      capTable: 'Current ownership structure and share allocation',
      banking: 'Bank account details for fund transfer',
      agreements: 'Signed investment and legal agreements',
      compliance: 'Regulatory compliance documentation'
    };
    return descriptions[requirement] || '';
  };

  const totalRequirements = legalCompliance.completedItems.length + legalCompliance.pendingItems.length;
  const completionPercentage = totalRequirements > 0 ? Math.round((legalCompliance.completedItems.length / totalRequirements) * 100) : 0;

  return (
    <div className="legal-compliance-card">
      <div className="compliance-header">
        <h3>Legal Compliance</h3>
        <div className="completion-indicator">
          <span className="completion-percentage">{Math.round(completionPercentage)}% Complete</span>
        </div>
      </div>

      {pendingAmount > 0 && (
        <div className="pending-funds-alert">
          <div className="alert-content">
            <div className="alert-icon">
              <i className="fas fa-lock"></i>
            </div>
            <div className="alert-text">
              <h4>Pending Fund Release</h4>
              <p className="pending-amount">{formatCurrency(pendingAmount)}</p>
              <p className="alert-description">
                Complete all requirements below to unlock your pending investment funds.
              </p>
            </div>
          </div>
          
          {nextDisbursement && (
            <div className="target-date">
              <i className="fas fa-target"></i>
              <span>
                Target completion: {new Date(nextDisbursement).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
          )}
        </div>
      )}

      <div className="requirements-section">
        <div className="section-header">
          <h4>Completed Requirements</h4>
          <span className="item-count">
            {legalCompliance.completedItems.length} of {totalRequirements}
          </span>
        </div>
        
        {legalCompliance.completedItems.length > 0 ? (
          <div className="requirements-list completed">
            {legalCompliance.completedItems.map((item, index) => (
              <div key={index} className="requirement-item completed-item">
                <div className="requirement-info">
                  <span className="requirement-name">
                    {requirementLabels[item] || item.toUpperCase()}
                  </span>
                  <span className="requirement-description">
                    {getRequirementDescription(item)}
                  </span>
                </div>
                <StatusBadge status="completed" />
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No requirements completed yet</p>
          </div>
        )}
      </div>

      {legalCompliance.pendingItems.length > 0 && (
        <div className="requirements-section">
          <div className="section-header">
            <h4>Pending Requirements</h4>
            <span className="item-count urgent">
              {legalCompliance.pendingItems.length} remaining
            </span>
          </div>
          
          <div className="requirements-list pending">
            {legalCompliance.pendingItems.map((item, index) => (
              <div key={index} className="requirement-item pending-item">
                <div className="requirement-info">
                  <span className="requirement-name">
                    {requirementLabels[item] || item.toUpperCase()}
                  </span>
                  <span className="requirement-description">
                    {getRequirementDescription(item)}
                  </span>
                </div>
                <StatusBadge status="pending" />
              </div>
            ))}
          </div>

          <div className="action-needed">
            <div className="action-content">
              <i className="fas fa-exclamation-circle"></i>
              <div>
                <h5>Action Required</h5>
                <p>
                  Please work with our legal team to complete the remaining {legalCompliance.pendingItems.length} requirements. 
                  Contact your investment manager for assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {isCompleted && (
        <div className="compliance-complete">
          <div className="complete-content">
            <div className="complete-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <div className="complete-text">
              <h4>All Requirements Completed!</h4>
              <p>
                Congratulations! You have successfully completed all legal compliance requirements. 
                Your funds are ready for disbursement.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="compliance-footer">
        <div className="footer-note">
          <i className="fas fa-info-circle"></i>
          <p>
            Legal requirements ensure compliance with investment regulations and protect both parties. 
            Our team is available to assist with any questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalCompliance;