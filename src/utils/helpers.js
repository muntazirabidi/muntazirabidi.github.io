// src/utils/helpers.js
/**
 * Format date to a readable string
 * @param {Date|string} date - Date to format
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
  const d = new Date(date);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
};

/**
 * Truncate text to a specific length
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, length = 100) => {
  if (text.length <= length) return text;
  return `${text.slice(0, length).trim()}...`;
};

/**
 * Generate meta tags for SEO
 * @param {Object} options - Meta options
 * @returns {Object} Meta tags object
 */
export const generateMeta = ({ title, description, image, url }) => {
  return {
    title: `${title} | Dr. Muntazir Abidi`,
    meta: [
      {
        name: "description",
        content: description,
      },
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:image",
        content: image,
      },
      {
        property: "og:url",
        content: url,
      },
    ],
  };
};
