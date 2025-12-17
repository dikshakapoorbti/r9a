/**
 * Security utilities for input sanitization and validation
 */

/**
 * Sanitize HTML to prevent XSS attacks
 * @param {string} text - Input text to sanitize
 * @returns {string} - Sanitized text
 */
export const sanitizeHTML = (text) => {
  if (!text) return '';

  const element = document.createElement('div');
  element.textContent = text;
  return element.innerHTML;
};

/**
 * Check for suspicious patterns (XSS, script injection)
 * @param {string} text - Text to check
 * @returns {boolean} - True if suspicious content found
 */
export const containsSuspiciousContent = (text) => {
  if (!text) return false;

  const suspiciousPatterns = [
    /<script/i,
    /<\/script>/i,
    /javascript:/i,
    /on\w+\s*=/i, // Event handlers like onclick=
    /<iframe/i,
    /<embed/i,
    /<object/i,
    /eval\(/i,
    /document\./i,
    /window\./i,
    /alert\(/i,
    /prompt\(/i,
    /confirm\(/i,
  ];

  return suspiciousPatterns.some(pattern => pattern.test(text));
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email
 */
export const isValidEmail = (email) => {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(email.trim());
};

/**
 * Rate limiting check using localStorage
 * @param {string} key - Storage key for rate limiting
 * @param {number} limitMs - Time limit in milliseconds
 * @returns {boolean} - True if rate limit exceeded
 */
export const isRateLimited = (key, limitMs = 60000) => {
  const lastSubmit = Number(localStorage.getItem(key) || 0);
  const now = Date.now();
  return (now - lastSubmit) < limitMs;
};

/**
 * Update rate limit timestamp
 * @param {string} key - Storage key for rate limiting
 */
export const updateRateLimit = (key) => {
  localStorage.setItem(key, String(Date.now()));
};

/**
 * Validate phone number digits
 * @param {string} phone - Phone number to validate
 * @param {number} minDigits - Minimum required digits
 * @returns {boolean} - True if valid
 */
export const isValidPhone = (phone, minDigits = 7) => {
  if (!phone) return false;
  const digits = phone.replace(/\D/g, '');
  return digits.length >= minDigits;
};
