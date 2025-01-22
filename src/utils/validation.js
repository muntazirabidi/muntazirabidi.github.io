// src/utils/validation.js
/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} Is valid email
 */
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Validate form fields
 * @param {Object} fields - Form fields to validate
 * @returns {Object} Validation results
 */
export const validateForm = (fields) => {
  const errors = {};

  if (!fields.email) {
    errors.email = "Email is required";
  } else if (!isValidEmail(fields.email)) {
    errors.email = "Invalid email address";
  }

  if (!fields.name) {
    errors.name = "Name is required";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
