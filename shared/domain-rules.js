/**
 * Shared domain rules library.
 * This package contains pure functions for date/UTC operations, eligibility checks,
 * currency validation and other domain logic used across micro‑frontends.  It is
 * a pure ESM module and contains no React or browser dependencies.
 */

export function checkPilotCurrency(currency) {
  const now = new Date();
  const last = new Date(currency.lastTrainingDate);
  const expiry = new Date(last);
  expiry.setMonth(expiry.getMonth() + currency.expiryMonths);
  const diff = Math.floor((expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  if (diff < 0) {
    return { status: 'lapsed', daysUntilExpiry: diff };
  } else if (diff < 30) {
    return { status: 'expiring', daysUntilExpiry: diff };
  }
  return { status: 'current', daysUntilExpiry: diff };
}

/**
 * Validates that a trip request meets certain rules: there must be at least one pilot,
 * the departure date must be in the future, and the flight time must not exceed 12 hours.
 */
export function validateTripRequest(request) {
  const errors = [];
  if (!request.pilots || request.pilots.length === 0) {
    errors.push('At least one pilot must be assigned');
  }
  const dep = new Date(request.departure);
  if (dep.getTime() < Date.now()) {
    errors.push('Departure must be in the future');
  }
  if (request.flightHours > 12) {
    errors.push('Flight duration exceeds 12 hours');
  }
  return errors;
}
