// src/utils/analytics.js
/**
 * Track page view
 * @param {string} pageName - Name of the page
 */
export const trackPageView = (pageName) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "page_view", {
      page_title: pageName,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }
};

/**
 * Track user event
 * @param {string} eventName - Name of the event
 * @param {Object} eventParams - Event parameters
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
};
