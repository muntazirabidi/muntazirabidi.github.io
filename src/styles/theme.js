export const theme = {
  colors: {
    primary: {
      blue: {
        light: "#60A5FA", // blue-400
        default: "#2563EB", // blue-600
        dark: "#1D4ED8", // blue-700
      },
      purple: {
        light: "#A78BFA", // purple-400
        default: "#7C3AED", // purple-600
        dark: "#6D28D9", // purple-700
      },
    },
    accent: {
      coral: {
        light: "#FFB4A2",
        default: "#E5989B",
        dark: "#B67C82",
      },
      yellow: {
        light: "#FFD670",
        default: "#FFB347",
        dark: "#E69220",
      },
    },
    gray: {
      50: "#F8FAFC",
      100: "#F1F5F9",
      200: "#E2E8F0",
      300: "#CBD5E1",
      400: "#94A3B8",
      500: "#64748B",
      600: "#475569",
      700: "#334155",
      800: "#1E293B",
      900: "#0F172A",
    },
  },
  fonts: {
    sans: [
      "Inter",
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(", "),
    heading: ["Inter", "ui-sans-serif", "system-ui"].join(", "),
  },
  spacing: {
    container: {
      padding: "1rem",
      maxWidth: "72rem", // 1152px
    },
    section: {
      padding: {
        y: "5rem", // py-20
      },
    },
  },
  borderRadius: {
    button: "9999px", // rounded-full
    card: "0.75rem", // rounded-xl
  },
  animation: {
    duration: {
      fast: "150ms",
      default: "300ms",
      slow: "500ms",
    },
    timing: {
      default: "cubic-bezier(0.4, 0, 0.2, 1)",
      bounce: "cubic-bezier(0.8, 0, 1, 1)",
    },
  },
};
