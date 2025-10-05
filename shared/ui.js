/**
 * Shared UI components for cross-platform compatibility.
 * This provides basic UI utilities that can be consumed by Angular, React, and Vue apps.
 */

/**
 * Status chip component for displaying pilot/training status
 */
export function createStatusChip(status) {
  const statusMap = {
    'OK': { class: 'status-chip--success', label: 'OK' },
    'WARNING': { class: 'status-chip--warning', label: 'WARNING' },
    'EXPIRED': { class: 'status-chip--error', label: 'EXPIRED' }
  };
  
  return statusMap[status] || { class: 'status-chip--default', label: status };
}

/**
 * Get CSS classes for status-based styling
 */
export function getStatusClasses(status) {
  const baseClasses = 'status-chip';
  const statusChip = createStatusChip(status);
  return `${baseClasses} ${statusChip.class}`;
}

/**
 * Format pilot name for display
 */
export function formatPilotName(firstName, lastName, rating) {
  return `${firstName} ${lastName} (${rating})`;
}

/**
 * Get training status based on days until expiry
 */
export function getTrainingStatus(daysUntilExpiry) {
  if (daysUntilExpiry < 0) return 'EXPIRED';
  if (daysUntilExpiry < 30) return 'WARNING';
  return 'OK';
}
