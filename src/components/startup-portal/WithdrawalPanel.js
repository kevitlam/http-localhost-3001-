import React, { useState } from 'react';

const WithdrawalPanel = ({ availableBalance, companyInfo, onWithdrawal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [withdrawalMethod, setWithdrawalMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [bankDetails, setBankDetails] = useState({
    accountName: '',
    accountNumber: '',
    bankName: '',
    routingNumber: '',
    swiftCode: ''
  });
  const [cryptoDetails, setCryptoDetails] = useState({
    walletAddress: '',
    network: 'ethereum',
    currency: 'USDC'
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState(1); // 1: Method, 2: Details, 3: Confirmation

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleMethodSelect = (method) => {
    setWithdrawalMethod(method);
    setStep(2);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setAmount(value);
  };

  const handleBankDetailsChange = (field, value) => {
    setBankDetails(prev => ({ ...prev, [field]: value }));
  };

  const handleCryptoDetailsChange = (field, value) => {
    setCryptoDetails(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = () => {
    if (!amount || parseInt(amount) <= 0 || parseInt(amount) > availableBalance) return false;
    
    if (withdrawalMethod === 'bank') {
      return bankDetails.accountName && bankDetails.accountNumber && bankDetails.bankName;
    } else if (withdrawalMethod === 'crypto') {
      return cryptoDetails.walletAddress && cryptoDetails.network && cryptoDetails.currency;
    }
    return false;
  };

  const handleSubmit = async () => {
    if (!isFormValid()) return;
    
    setIsProcessing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const withdrawalData = {
      amount: parseInt(amount),
      method: withdrawalMethod,
      details: withdrawalMethod === 'bank' ? bankDetails : cryptoDetails,
      timestamp: new Date().toISOString(),
      companyId: companyInfo.id
    };
    
    onWithdrawal?.(withdrawalData);
    setIsProcessing(false);
    setIsOpen(false);
    setStep(1);
    setAmount('');
    setWithdrawalMethod('');
  };

  const resetForm = () => {
    setStep(1);
    setWithdrawalMethod('');
    setAmount('');
    setBankDetails({
      accountName: '',
      accountNumber: '',
      bankName: '',
      routingNumber: '',
      swiftCode: ''
    });
    setCryptoDetails({
      walletAddress: '',
      network: 'ethereum',
      currency: 'USDC'
    });
  };

  const handleClose = () => {
    setIsOpen(false);
    resetForm();
  };

  if (!isOpen) {
    return (
      <div className="withdrawal-trigger">
        <button 
          className="withdrawal-button" 
          onClick={() => setIsOpen(true)}
          disabled={availableBalance <= 0}
        >
          <div className="withdrawal-button-content">
            <i className="fas fa-arrow-circle-down"></i>
            <div className="withdrawal-button-text">
              <span className="withdrawal-label">Withdraw Funds</span>
              <span className="withdrawal-available">{formatCurrency(availableBalance)} available</span>
            </div>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="withdrawal-modal-overlay" onClick={handleClose}>
      <div className="withdrawal-modal" onClick={e => e.stopPropagation()}>
        <div className="withdrawal-modal-header">
          <div className="modal-title-section">
            <h3>Withdraw Funds</h3>
            <p className="modal-subtitle">Available: {formatCurrency(availableBalance)}</p>
          </div>
          <button className="modal-close" onClick={handleClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="withdrawal-modal-content">
          {step === 1 && (
            <div className="method-selection">
              <div className="step-header">
                <h4>Choose withdrawal method</h4>
                <p>Select how you'd like to receive your funds</p>
              </div>

              <div className="method-grid">
                <div 
                  className="method-card bank-method"
                  onClick={() => handleMethodSelect('bank')}
                >
                  <div className="method-icon">
                    <i className="fas fa-university"></i>
                  </div>
                  <div className="method-info">
                    <h5>Bank Transfer</h5>
                    <p>Direct transfer to your bank account</p>
                    <div className="method-features">
                      <span>2-3 business days</span>
                      <span>No fees</span>
                    </div>
                  </div>
                  <div className="method-arrow">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </div>

                <div 
                  className="method-card crypto-method"
                  onClick={() => handleMethodSelect('crypto')}
                >
                  <div className="method-icon">
                    <i className="fab fa-bitcoin"></i>
                  </div>
                  <div className="method-info">
                    <h5>Crypto Transfer</h5>
                    <p>Transfer to your crypto wallet</p>
                    <div className="method-features">
                      <span>Within 1 hour</span>
                      <span>Network fees apply</span>
                    </div>
                  </div>
                  <div className="method-arrow">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="withdrawal-details">
              <div className="step-header">
                <button className="back-button" onClick={() => setStep(1)}>
                  <i className="fas fa-arrow-left"></i>
                  Back
                </button>
                <h4>
                  {withdrawalMethod === 'bank' ? 'Bank Details' : 'Crypto Details'}
                </h4>
                <p>Enter your withdrawal information</p>
              </div>

              <div className="amount-section">
                <label>Withdrawal Amount</label>
                <div className="amount-input-wrapper">
                  <span className="currency-symbol">$</span>
                  <input
                    type="text"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="0"
                    className="amount-input"
                  />
                  <button 
                    className="max-button"
                    onClick={() => setAmount(availableBalance.toString())}
                  >
                    MAX
                  </button>
                </div>
                <div className="amount-info">
                  <span>Available: {formatCurrency(availableBalance)}</span>
                </div>
              </div>

              {withdrawalMethod === 'bank' && (
                <div className="bank-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Account Holder Name</label>
                      <input
                        type="text"
                        value={bankDetails.accountName}
                        onChange={(e) => handleBankDetailsChange('accountName', e.target.value)}
                        placeholder="Enter full name"
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Account Number</label>
                      <input
                        type="text"
                        value={bankDetails.accountNumber}
                        onChange={(e) => handleBankDetailsChange('accountNumber', e.target.value)}
                        placeholder="Enter account number"
                      />
                    </div>
                    <div className="form-group">
                      <label>Routing Number</label>
                      <input
                        type="text"
                        value={bankDetails.routingNumber}
                        onChange={(e) => handleBankDetailsChange('routingNumber', e.target.value)}
                        placeholder="9 digits"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Bank Name</label>
                      <input
                        type="text"
                        value={bankDetails.bankName}
                        onChange={(e) => handleBankDetailsChange('bankName', e.target.value)}
                        placeholder="Enter bank name"
                      />
                    </div>
                    <div className="form-group">
                      <label>SWIFT Code (Optional)</label>
                      <input
                        type="text"
                        value={bankDetails.swiftCode}
                        onChange={(e) => handleBankDetailsChange('swiftCode', e.target.value)}
                        placeholder="For international transfers"
                      />
                    </div>
                  </div>
                </div>
              )}

              {withdrawalMethod === 'crypto' && (
                <div className="crypto-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Network</label>
                      <select
                        value={cryptoDetails.network}
                        onChange={(e) => handleCryptoDetailsChange('network', e.target.value)}
                      >
                        <option value="ethereum">Ethereum (ERC-20)</option>
                        <option value="polygon">Polygon</option>
                        <option value="bsc">Binance Smart Chain</option>
                        <option value="arbitrum">Arbitrum</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Currency</label>
                      <select
                        value={cryptoDetails.currency}
                        onChange={(e) => handleCryptoDetailsChange('currency', e.target.value)}
                      >
                        <option value="USDC">USDC</option>
                        <option value="USDT">USDT</option>
                        <option value="ETH">ETH</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group full-width">
                      <label>Wallet Address</label>
                      <input
                        type="text"
                        value={cryptoDetails.walletAddress}
                        onChange={(e) => handleCryptoDetailsChange('walletAddress', e.target.value)}
                        placeholder="0x..."
                        className="wallet-address-input"
                      />
                      <div className="wallet-warning">
                        <i className="fas fa-exclamation-triangle"></i>
                        <span>Ensure this address supports {cryptoDetails.currency} on {cryptoDetails.network}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="details-actions">
                <button 
                  className="continue-button"
                  onClick={() => setStep(3)}
                  disabled={!isFormValid()}
                >
                  Continue to Review
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="withdrawal-confirmation">
              <div className="step-header">
                <button className="back-button" onClick={() => setStep(2)}>
                  <i className="fas fa-arrow-left"></i>
                  Back
                </button>
                <h4>Review Withdrawal</h4>
                <p>Please confirm your withdrawal details</p>
              </div>

              <div className="confirmation-summary">
                <div className="summary-amount">
                  <span className="amount-label">You're withdrawing</span>
                  <span className="amount-value">{formatCurrency(parseInt(amount))}</span>
                </div>

                <div className="summary-details">
                  <div className="detail-row">
                    <span className="detail-label">Method</span>
                    <span className="detail-value">
                      {withdrawalMethod === 'bank' ? 'Bank Transfer' : 'Crypto Transfer'}
                    </span>
                  </div>
                  
                  {withdrawalMethod === 'bank' ? (
                    <>
                      <div className="detail-row">
                        <span className="detail-label">Account</span>
                        <span className="detail-value">
                          {bankDetails.bankName} - ****{bankDetails.accountNumber.slice(-4)}
                        </span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Processing Time</span>
                        <span className="detail-value">2-3 business days</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="detail-row">
                        <span className="detail-label">Network</span>
                        <span className="detail-value">{cryptoDetails.network}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Currency</span>
                        <span className="detail-value">{cryptoDetails.currency}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Address</span>
                        <span className="detail-value wallet-address">
                          {cryptoDetails.walletAddress.slice(0, 6)}...{cryptoDetails.walletAddress.slice(-6)}
                        </span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Processing Time</span>
                        <span className="detail-value">Within 1 hour</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="confirmation-actions">
                <button 
                  className="confirm-button"
                  onClick={handleSubmit}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <div className="spinner"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-check"></i>
                      Confirm Withdrawal
                    </>
                  )}
                </button>
              </div>

              <div className="security-notice">
                <i className="fas fa-shield-alt"></i>
                <div>
                  <p><strong>Secure Transaction</strong></p>
                  <p>Your withdrawal will be processed securely. You'll receive a confirmation email once completed.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WithdrawalPanel;