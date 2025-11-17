// Startup Authentication Service - Frontend Only
// Following exact pattern from noname AuthService.ts

// Hardcoded startup data for production reliability (fallback)
const STARTUPS_DATA = [
  {
    username: "TechStart001",
    password: "VCPortal2025!",
    status: "active",
    assignedDate: "2025-10-15",
    completed: false,
    companyInfo: {
      name: "TechVision AI",
      founder: "Sarah Johnson",
      email: "sarah@techvision.ai",
      sector: "Artificial Intelligence",
      stage: "Pre-Seed"
    },
    investment: {
      committed: 250000,
      disbursed: 100000,
      pending: 150000,
      currency: "USD",
      investmentDate: "2025-10-15",
      nextDisbursement: "2025-12-01"
    },
    verification: {
      status: "verified",
      verifiedDate: "2025-11-01",
      greenMark: true,
      documents: {
        kyc: "completed",
        incorporation: "completed",
        capTable: "completed",
        banking: "pending"
      }
    },
    legalCompliance: {
      completed: false,
      completedItems: ["kyc", "incorporation", "capTable"],
      pendingItems: ["banking", "agreements", "compliance"]
    }
  },
  {
    username: "FinTech002",
    password: "VCPortal2025!",
    status: "active",
    assignedDate: "2025-11-10",
    completed: false,
    companyInfo: {
      name: "CryptoFlow",
      founder: "Michael Chen",
      email: "michael@cryptoflow.io",
      sector: "FinTech",
      stage: "Seed"
    },
    investment: {
      committed: 500000,
      disbursed: 0,
      pending: 500000,
      currency: "USD",
      investmentDate: "2025-11-10",
      nextDisbursement: "2025-12-15"
    },
    verification: {
      status: "pending",
      verifiedDate: null,
      greenMark: false,
      documents: {
        kyc: "pending",
        incorporation: "completed",
        capTable: "pending",
        banking: "pending"
      }
    },
    legalCompliance: {
      completed: false,
      completedItems: ["incorporation"],
      pendingItems: ["kyc", "capTable", "banking", "agreements", "compliance"]
    }
  },
  {
    username: "HealthTech003",
    password: "VCPortal2025!",
    status: "active",
    assignedDate: "2025-11-05",
    completed: true,
    companyInfo: {
      name: "MediCore",
      founder: "Dr. Emily Rodriguez",
      email: "emily@medicore.health",
      sector: "HealthTech",
      stage: "Series A"
    },
    investment: {
      committed: 1000000,
      disbursed: 1000000,
      pending: 0,
      currency: "USD",
      investmentDate: "2025-09-01",
      nextDisbursement: null
    },
    verification: {
      status: "verified",
      verifiedDate: "2025-09-15",
      greenMark: true,
      documents: {
        kyc: "completed",
        incorporation: "completed",
        capTable: "completed",
        banking: "completed"
      }
    },
    legalCompliance: {
      completed: true,
      completedItems: ["kyc", "incorporation", "capTable", "banking", "agreements", "compliance"],
      pendingItems: []
    }
  },
  {
    username: "EdTech004",
    password: "VCPortal2025!",
    status: "active",
    assignedDate: "2025-11-12",
    completed: false,
    companyInfo: {
      name: "LearnHub",
      founder: "Alex Thompson",
      email: "alex@learnhub.edu",
      sector: "EdTech",
      stage: "Pre-Seed"
    },
    investment: {
      committed: 150000,
      disbursed: 50000,
      pending: 100000,
      currency: "USD",
      investmentDate: "2025-11-12",
      nextDisbursement: "2025-12-20"
    },
    verification: {
      status: "pending",
      verifiedDate: null,
      greenMark: false,
      documents: {
        kyc: "completed",
        incorporation: "pending",
        capTable: "pending",
        banking: "pending"
      }
    },
    legalCompliance: {
      completed: false,
      completedItems: ["kyc"],
      pendingItems: ["incorporation", "capTable", "banking", "agreements", "compliance"]
    }
  },
  {
    username: "GreenTech005",
    password: "VCPortal2025!",
    status: "active",
    assignedDate: "2025-10-28",
    completed: false,
    companyInfo: {
      name: "EcoSmart Solutions",
      founder: "Lisa Park",
      email: "lisa@ecosmart.green",
      sector: "GreenTech",
      stage: "Seed"
    },
    investment: {
      committed: 750000,
      disbursed: 250000,
      pending: 500000,
      currency: "USD",
      investmentDate: "2025-10-28",
      nextDisbursement: "2025-12-10"
    },
    verification: {
      status: "verified",
      verifiedDate: "2025-11-10",
      greenMark: true,
      documents: {
        kyc: "completed",
        incorporation: "completed",
        capTable: "completed",
        banking: "completed"
      }
    },
    legalCompliance: {
      completed: false,
      completedItems: ["kyc", "incorporation", "capTable", "banking"],
      pendingItems: ["agreements", "compliance"]
    }
  }
];

class StartupAuthService {
  constructor() {}

  static getInstance() {
    if (!StartupAuthService.instance) {
      StartupAuthService.instance = new StartupAuthService();
    }
    return StartupAuthService.instance;
  }

  /**
   * Get all startups data - tries JSON import first, falls back to hardcoded data
   */
  async getStartupsData() {
    try {
      // Try to dynamically import the JSON file
      const startupsModule = await import('../data/startups.json');
      const startupsData = startupsModule.default || startupsModule;
      
      if (startupsData && startupsData.startups && Array.isArray(startupsData.startups)) {
        console.log('✅ Successfully loaded startups from JSON file');
        return startupsData.startups;
      } else {
        throw new Error('Invalid JSON structure');
      }
    } catch (error) {
      console.warn('⚠️ Could not load startups.json, using hardcoded data:', error);
      console.log('🔄 Using fallback hardcoded startup data for production');
      return STARTUPS_DATA;
    }
  }

  /**
   * Validate startup credentials
   */
  async validateCredentials(username, password) {
    try {
      const startups = await this.getStartupsData();
      const startup = startups.find(s => s.username === username);

      if (!startup) {
        return {
          success: false,
          error: 'Company username not found. Please check your credentials.'
        };
      }

      if (startup.password !== password) {
        return {
          success: false,
          error: 'Invalid password. Please check your credentials.'
        };
      }

      if (startup.status !== 'active') {
        return {
          success: false,
          error: 'This portfolio account is not active. Please contact support.'
        };
      }

      return {
        success: true,
        startup
      };
    } catch (error) {
      console.error('❌ Error validating credentials:', error);
      return {
        success: false,
        error: 'Authentication service error. Please try again.'
      };
    }
  }

  /**
   * Get startup by username
   */
  async getStartupByUsername(username) {
    try {
      const startups = await this.getStartupsData();
      return startups.find(s => s.username === username) || null;
    } catch (error) {
      console.error('❌ Error getting startup:', error);
      return null;
    }
  }

  /**
   * Check if startup has completed all legal requirements
   */
  async isStartupCompleted(username) {
    try {
      const startup = await this.getStartupByUsername(username);
      return startup?.completed === true || startup?.legalCompliance?.completed === true;
    } catch (error) {
      console.error('❌ Error checking startup completion:', error);
      return false;
    }
  }

  /**
   * Get demo credentials for testing
   */
  getDemoCredentials() {
    return {
      username: "TechStart001",
      password: "VCPortal2025!"
    };
  }

  /**
   * Get investment overview for startup
   */
  async getInvestmentOverview(username) {
    try {
      const startup = await this.getStartupByUsername(username);
      if (!startup) return null;

      return {
        companyInfo: startup.companyInfo,
        investment: startup.investment,
        verification: startup.verification,
        legalCompliance: startup.legalCompliance,
        progressPercentage: this.calculateProgressPercentage(startup.legalCompliance)
      };
    } catch (error) {
      console.error('❌ Error getting investment overview:', error);
      return null;
    }
  }

  /**
   * Calculate legal compliance progress percentage
   */
  calculateProgressPercentage(legalCompliance) {
    const totalItems = legalCompliance.completedItems.length + legalCompliance.pendingItems.length;
    if (totalItems === 0) return 100;
    return Math.round((legalCompliance.completedItems.length / totalItems) * 100);
  }

  /**
   * Check if startup has green verification mark
   */
  async hasGreenMark(username) {
    try {
      const startup = await this.getStartupByUsername(username);
      return startup?.verification?.greenMark === true;
    } catch (error) {
      console.error('❌ Error checking green mark status:', error);
      return false;
    }
  }

  /**
   * Get next disbursement information
   */
  async getNextDisbursement(username) {
    try {
      const startup = await this.getStartupByUsername(username);
      if (!startup) return null;

      return {
        amount: startup.investment.pending,
        date: startup.investment.nextDisbursement,
        requirementsMet: startup.legalCompliance.completed
      };
    } catch (error) {
      console.error('❌ Error getting disbursement info:', error);
      return null;
    }
  }
}

export default StartupAuthService;