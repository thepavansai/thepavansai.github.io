/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";
import PropTypes from "prop-types";

const Header = ({ theme, onToggleTheme }) => {
  const isDark = theme === "dark";

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "2rem",
        background: isDark ? "rgba(10, 12, 14, 0.72)" : "rgba(248, 250, 252, 0.74)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: isDark
          ? "1px solid rgba(255, 255, 255, 0.12)"
          : "1px solid rgba(15, 23, 42, 0.14)",
        padding: "0.9rem 4.25rem 0.9rem 1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
        boxSizing: "border-box",
        fontWeight: 500,
      }}
    >
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#footer">Contact</a>
      <button
        type="button"
        onClick={onToggleTheme}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        style={{
          position: "absolute",
          right: "1.25rem",
          top: "50%",
          transform: "translateY(-50%)",
          border: isDark
            ? "1px solid rgba(255, 255, 255, 0.24)"
            : "1px solid rgba(15, 23, 42, 0.18)",
          borderRadius: "999px",
          width: "2.35rem",
          height: "2.35rem",
          padding: 0,
          background: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.72)",
          color: "inherit",
          fontSize: "1.05rem",
          lineHeight: 1,
          cursor: "pointer",
          display: "grid",
          placeItems: "center",
        }}
      >
        {isDark ? "☀" : "☾"}
      </button>
    </div>
  );
};

Header.defaultProps = {
  theme: "light",
  onToggleTheme: () => {},
};

Header.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]),
  onToggleTheme: PropTypes.func,
};

export default Header;
