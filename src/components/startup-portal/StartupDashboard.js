import React from 'react';
import { useStartupAuth } from '../../contexts/StartupAuthContext.js';
import InvestmentOverview from './InvestmentOverview.js';
import VerificationStatus from './VerificationStatus.js';
import LegalCompliance from './LegalCompliance.js';
import PortalHeader from './PortalHeader.js';

const StartupDashboard = () => {
  const { 
    startupData, 
    currentStartup, 
    logout,
    getInvestmentData,
    getVerificationStatus,
    getLegalCompliance,
    hasGreenMark,
    getProgressPercentage,
    isStartupCompleted
  } = useStartupAuth();

  if (!startupData || !currentStartup) {
    return (
      <div className="startup-dashboard-loading">
        <div className="loading-spinner">
          <i className="fas fa-spinner fa-spin"></i>
          <p>Loading portfolio data...</p>
        </div>
      </div>
    );
  }

  const investmentData = getInvestmentData();
  const verificationStatus = getVerificationStatus();
  const legalCompliance = getLegalCompliance();
  const progressPercentage = getProgressPercentage();
  const isCompleted = isStartupCompleted();
  const greenMark = hasGreenMark();

  return (
    <div className="startup-dashboard">
      {/* Header with company info and logout */}
      <PortalHeader 
        companyInfo={startupData.companyInfo}
        greenMark={greenMark}
        onLogout={logout}
      />

      <div className="dashboard-content">
        {/* Welcome Section */}
        <div className="dashboard-welcome">
          <h1>Welcome back, {startupData.companyInfo?.name}</h1>
          <p className="welcome-subtitle">
            Track your investment progress and manage legal requirements
          </p>
          
          {isCompleted && (
            <div className="completion-badge">
              <i className="fas fa-check-circle"></i>
              <span>All Requirements Completed</span>
            </div>
          )}
        </div>

        {/* Investment Overview Card */}
        <InvestmentOverview 
          investment={investmentData}
          companyInfo={startupData.companyInfo}
          progressPercentage={progressPercentage}
        />

        {/* Two Column Layout */}
        <div className="dashboard-grid">
          {/* Verification Status */}
          <VerificationStatus 
            verification={verificationStatus}
            greenMark={greenMark}
            companyName={startupData.companyInfo?.name}
          />

          {/* Legal Compliance Tracker */}
          <LegalCompliance 
            legalCompliance={legalCompliance}
            pendingAmount={investmentData?.pending || 0}
            nextDisbursement={investmentData?.nextDisbursement}
            isCompleted={isCompleted}
          />
        </div>

        {/* Progress Summary */}
        <div className="progress-summary">
          <div className="progress-header">
            <h3>Overall Progress</h3>
            <span className="progress-percentage">{progressPercentage}% Complete</span>
          </div>
          <div className="progress-bar-container">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="progress-note">
            {progressPercentage === 100 
              ? "🎉 Congratulations! All requirements completed. Your funds are ready for disbursement."
              : `Complete the remaining ${legalCompliance?.pendingItems?.length || 0} requirements to unlock your pending investment.`
            }
          </p>
        </div>

        {/* Company Information */}
        <div className="company-info-card">
          <h3>Company Details</h3>
          <div className="company-details">
            <div className="detail-item">
              <span className="label">Founder:</span>
              <span className="value">{startupData.companyInfo?.founder}</span>
            </div>
            <div className="detail-item">
              <span className="label">Sector:</span>
              <span className="value">{startupData.companyInfo?.sector}</span>
            </div>
            <div className="detail-item">
              <span className="label">Stage:</span>
              <span className="value">{startupData.companyInfo?.stage}</span>
            </div>
            <div className="detail-item">
              <span className="label">Contact:</span>
              <span className="value">{startupData.companyInfo?.email}</span>
            </div>
            <div className="detail-item">
              <span className="label">Investment Date:</span>
              <span className="value">
                {investmentData?.investmentDate ? 
                  new Date(investmentData.investmentDate).toLocaleDateString() : 
                  'N/A'
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupDashboard;