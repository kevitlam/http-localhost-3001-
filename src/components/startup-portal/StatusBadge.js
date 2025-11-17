import React from 'react';

const StatusBadge = ({ status }) => {
  const badges = {
    completed: { 
      icon: "fas fa-check-circle", 
      color: "#10B981", 
      backgroundColor: "#ECFDF5",
      text: "Completed" 
    },
    pending: { 
      icon: "fas fa-clock", 
      color: "#F59E0B", 
      backgroundColor: "#FFFBEB",
      text: "Pending" 
    },
    required: { 
      icon: "fas fa-exclamation-triangle", 
      color: "#EF4444", 
      backgroundColor: "#FEF2F2",
      text: "Required" 
    },
    verified: {
      icon: "fas fa-shield-check",
      color: "#10B981",
      backgroundColor: "#ECFDF5",
      text: "Verified"
    },
    rejected: {
      icon: "fas fa-times-circle",
      color: "#EF4444",
      backgroundColor: "#FEF2F2",
      text: "Rejected"
    }
  };

  const badge = badges[status] || badges.required;

  return (
    <div 
      className="status-badge" 
      style={{ 
        color: badge.color,
        backgroundColor: badge.backgroundColor,
        border: `1px solid ${badge.color}20`
      }}
    >
      <i className={badge.icon}></i>
      <span>{badge.text}</span>
    </div>
  );
};

export default StatusBadge;