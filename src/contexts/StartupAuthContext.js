import React, { createContext, useContext, useState, useEffect } from 'react';
import StartupAuthService from '../services/StartupAuthService.js';

const StartupAuthContext = createContext();

export const useStartupAuth = () => {
  const context = useContext(StartupAuthContext);
  if (context === undefined) {
    throw new Error('useStartupAuth must be used within a StartupAuthProvider');
  }
  return context;
};

export const StartupAuthProvider = ({ children }) => {
  const [currentStartup, setCurrentStartup] = useState(null);
  const [startupData, setStartupData] = useState(null);
  const [lastLoginError, setLastLoginError] = useState(null);

  useEffect(() => {
    const savedStartup = localStorage.getItem('currentStartup');
    if (savedStartup) {
      setCurrentStartup(savedStartup);
      loadStartupData(savedStartup);
    }
    
    // Clean up localStorage on startup to prevent quota issues
    cleanupLocalStorage();
  }, []);

  // Function to clean up localStorage on startup
  const cleanupLocalStorage = () => {
    try {
      const currentStartup = localStorage.getItem('currentStartup');
      const keysToRemove = [];
      
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('startupData_') && key !== `startupData_${currentStartup}`) {
          keysToRemove.push(key);
        }
        // Preserve completion flags (completed_*) - they should persist
      }
      
      // Remove old startup data
      keysToRemove.forEach(key => {
        localStorage.removeItem(key);
      });
      
      if (keysToRemove.length > 0) {
        console.log(`🧹 Cleaned up ${keysToRemove.length} old localStorage entries (completion flags preserved)`);
      }
    } catch (error) {
      console.error('Error during localStorage cleanup:', error);
    }
  };

  const login = async (username, password) => {
    console.log(`🔑 Login attempt for startup: ${username}`);
    setLastLoginError(null);
    
    try {
      const authService = StartupAuthService.getInstance();
      const result = await authService.validateCredentials(username, password);

      if (!result.success) {
        console.log(`❌ Login failed for ${username}: ${result.error}`);
        setLastLoginError(result.error || 'Login failed. Please try again.');
        return false;
      }

      console.log(`✅ Login successful for: ${username}`);
      setCurrentStartup(username);
      setStartupData(result.startup);
      localStorage.setItem('currentStartup', username);
      
      // Save startup data to localStorage
      saveStartupDataToStorage(username, result.startup);
      
      setLastLoginError(null);
      return true;
    } catch (error) {
      console.error('❌ Login error:', error);
      setLastLoginError('Authentication service error. Please try again.');
      return false;
    }
  };

  const logout = () => {
    // Clear current startup data to free up space, but preserve completion status
    if (currentStartup) {
      const key = `startupData_${currentStartup}`;
      localStorage.removeItem(key);
      // Keep the completion flag for future logins
      // localStorage.removeItem(`completed_${currentStartup}`); // Don't remove this
    }
    
    setCurrentStartup(null);
    setStartupData(null);
    localStorage.removeItem('currentStartup');
    
    console.log('🚪 Startup logged out and localStorage cleaned (completion status preserved)');
  };

  const saveStartupDataToStorage = (username, data) => {
    if (username && data) {
      try {
        // Create a lightweight version of the data for localStorage
        const lightweightData = {
          username: data.username,
          companyInfo: data.companyInfo,
          investment: data.investment,
          verification: data.verification,
          legalCompliance: data.legalCompliance,
          lastUpdated: new Date().toISOString()
        };

        // Save lightweight data to localStorage
        const key = `startupData_${username}`;
        localStorage.setItem(key, JSON.stringify(lightweightData));
        
        // Also save completion status separately for quick access
        if (data.completed || data.legalCompliance?.completed) {
          localStorage.setItem(`completed_${username}`, 'true');
          console.log(`✅ Startup ${username} marked as completed`);
        }
        
        console.log(`✅ Startup data saved successfully for: ${username}`);
      } catch (error) {
        if (error instanceof DOMException && error.code === 22) {
          // QuotaExceededError - clear old data and try again
          console.warn('⚠️ localStorage quota exceeded. Clearing old data...');
          clearOldStartupData();
          
          try {
            // Try saving again with minimal data
            const minimalData = {
              username: data.username,
              companyName: data.companyInfo?.name || '',
              investment: {
                committed: data.investment?.committed || 0,
                disbursed: data.investment?.disbursed || 0,
                pending: data.investment?.pending || 0
              },
              verification: {
                greenMark: data.verification?.greenMark || false
              },
              lastUpdated: new Date().toISOString()
            };
            
            const key = `startupData_${username}`;
            localStorage.setItem(key, JSON.stringify(minimalData));
            
            console.log(`✅ Minimal startup data saved after quota cleanup for: ${username}`);
          } catch (retryError) {
            console.error('❌ Failed to save even minimal startup data:', retryError);
          }
        } else {
          console.error('❌ Error saving startup data:', error);
        }
      }
    }
  };

  // Helper function to clear old startup data
  const clearOldStartupData = () => {
    try {
      const keysToRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('startupData_') && key !== `startupData_${currentStartup}`) {
          keysToRemove.push(key);
        }
        // Don't remove completion flags - they should persist
      }
      
      keysToRemove.forEach(key => {
        localStorage.removeItem(key);
        console.log(`🗑️ Removed old startup data: ${key}`);
      });
    } catch (error) {
      console.error('Error clearing old data:', error);
    }
  };

  const loadStartupData = async (username) => {
    if (username) {
      try {
        // First try to load from localStorage
        const key = `startupData_${username}`;
        const savedData = localStorage.getItem(key);
        if (savedData) {
          const parsedData = JSON.parse(savedData);
          setStartupData(parsedData);
          console.log(`📥 Startup data loaded from localStorage for: ${username}`);
          return;
        }

        // If not in localStorage, fetch from service
        const authService = StartupAuthService.getInstance();
        const startup = await authService.getStartupByUsername(username);
        if (startup) {
          setStartupData(startup);
          saveStartupDataToStorage(username, startup);
          console.log(`📥 Startup data loaded from service for: ${username}`);
        }
      } catch (error) {
        console.error('❌ Error loading startup data:', error);
        // Clear corrupted data
        const key = `startupData_${username}`;
        localStorage.removeItem(key);
        console.log('🗑️ Removed corrupted startup data');
      }
    }
  };

  const getStartupInfo = () => {
    return startupData?.companyInfo || null;
  };

  const getInvestmentData = () => {
    return startupData?.investment || null;
  };

  const getVerificationStatus = () => {
    return startupData?.verification || null;
  };

  const getLegalCompliance = () => {
    return startupData?.legalCompliance || null;
  };

  const isStartupCompleted = () => {
    if (!currentStartup) return false;
    
    try {
      // Check completion flag in localStorage
      const completionFlag = localStorage.getItem(`completed_${currentStartup}`);
      if (completionFlag === 'true') {
        return true;
      }
      
      // Check startup data for completion
      if (startupData) {
        return startupData.completed === true || startupData.legalCompliance?.completed === true;
      }
      
      return false;
    } catch (error) {
      console.error('❌ Error checking startup completion:', error);
      return false;
    }
  };

  const markStartupAsCompleted = () => {
    if (!currentStartup) return;
    
    try {
      // Mark as completed in localStorage for immediate effect
      localStorage.setItem(`completed_${currentStartup}`, 'true');
      
      // Update startup data if available
      if (startupData) {
        const updatedData = {
          ...startupData,
          completed: true,
          legalCompliance: {
            ...startupData.legalCompliance,
            completed: true
          }
        };
        setStartupData(updatedData);
        saveStartupDataToStorage(currentStartup, updatedData);
      }
      
      console.log(`✅ Startup ${currentStartup} marked as completed in system`);
      
      // Note: In production, this would involve an API call to update the startups.json
      console.log(`📝 Backend update needed: Set completed=true for startup ${currentStartup}`);
      
    } catch (error) {
      console.error('❌ Error marking startup as completed:', error);
    }
  };

  const hasGreenMark = () => {
    return startupData?.verification?.greenMark === true;
  };

  const getProgressPercentage = () => {
    if (!startupData?.legalCompliance) return 0;
    
    const { completedItems, pendingItems } = startupData.legalCompliance;
    const totalItems = completedItems.length + pendingItems.length;
    
    if (totalItems === 0) return 100;
    return Math.round((completedItems.length / totalItems) * 100);
  };

  const getLastLoginError = () => {
    return lastLoginError;
  };

  const refreshStartupData = async () => {
    if (currentStartup) {
      await loadStartupData(currentStartup);
    }
  };

  const value = {
    currentStartup,
    startupData,
    login,
    logout,
    isAuthenticated: !!currentStartup,
    getStartupInfo,
    getInvestmentData,
    getVerificationStatus,
    getLegalCompliance,
    isStartupCompleted,
    markStartupAsCompleted,
    hasGreenMark,
    getProgressPercentage,
    getLastLoginError,
    refreshStartupData
  };

  return (
    <StartupAuthContext.Provider value={value}>
      {children}
    </StartupAuthContext.Provider>
  );
};

export default StartupAuthProvider;