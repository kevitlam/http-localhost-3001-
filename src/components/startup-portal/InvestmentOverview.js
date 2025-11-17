import React from 'react';

const InvestmentOverview = ({ investment, companyInfo, progressPercentage }) => {
  if (!investment) return null;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: investment.currency || 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getDisbursementStatus = () => {
    if (investment.pending === 0) {
      return { status: 'completed', text: 'Fully Disbursed', color: '#10B981' };
    } else if (investment.disbursed > 0) {
      return { status: 'partial', text: 'Partially Disbursed', color: '#F59E0B' };
    } else {
      return { status: 'pending', text: 'Awaiting Compliance', color: '#EF4444' };
    }
  };

  const disbursementStatus = getDisbursementStatus();

  return (
    <div className="investment-overview-card">
      <div className="investment-header">
        <div className="header-content">
          <h2>Investment Overview</h2>
          <p className="investment-summary">{companyInfo?.stage || 'N/A'} • {companyInfo?.sector || 'N/A'}</p>
        </div>
        <div className="disbursement-status">
          <span className="status-text" style={{ color: disbursementStatus.color }}>
            {disbursementStatus.text}
          </span>
        </div>
      </div>
      
      <div className="investment-amounts">
        <div className="amount-grid">
          <div className="amount-item total-committed">
            <div className="amount-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <div className="amount-details">
              <span className="amount-label">Total Committed</span>
              <span className="amount-value">{formatCurrency(investment.committed)}</span>
              <span className="amount-sublabel">Total investment amount</span>
            </div>
          </div>
          
          <div className="amount-item disbursed">
            <div className="amount-icon received">
              <i className="fas fa-check-circle"></i>
            </div>
            <div className="amount-details">
              <span className="amount-label">Received</span>
              <span className="amount-value">{formatCurrency(investment.disbursed)}</span>
              <span className="amount-sublabel">Already in your account</span>
            </div>
          </div>
          
          <div className="amount-item pending">
            <div className="amount-icon pending-icon">
              <i className="fas fa-clock"></i>
            </div>
            <div className="amount-details">
              <span className="amount-label">Pending Legal Completion</span>
              <span className="amount-value pending-amount">{formatCurrency(investment.pending)}</span>
              <span className="amount-sublabel">
                {investment.pending > 0 ? 'Complete legal requirements to unlock' : 'All funds released'}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="investment-progress">
        <div className="progress-header">
          <span>Disbursement Progress</span>
          <span className="progress-percentage">
            {Math.round((investment.disbursed / investment.committed) * 100)}%
          </span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ 
              width: `${(investment.disbursed / investment.committed) * 100}%`,
              background: investment.pending === 0 ? '#10B981' : '#3B82F6'
            }}
          ></div>
        </div>
      </div>

      {investment.nextDisbursement && investment.pending > 0 && (
        <div className="next-disbursement">
          <div className="disbursement-info">
            <i className="fas fa-calendar-alt"></i>
            <div>
              <span className="disbursement-label">Next Disbursement Target</span>
              <span className="disbursement-date">
                {new Date(investment.nextDisbursement).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>
          <div className="disbursement-note">
            <p>Complete all pending legal requirements to meet this disbursement target.</p>
          </div>
        </div>
      )}

      {investment.pending === 0 && (
        <div className="completion-message">
          <div className="completion-content">
            <i className="fas fa-trophy"></i>
            <div>
              <h4>Investment Fully Disbursed!</h4>
              <p>Congratulations! All committed funds have been successfully transferred to your account.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestmentOverview;