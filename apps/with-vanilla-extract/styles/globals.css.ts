import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  padding: 0,
  margin: 0,
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("html", {
  "@media": {
    "(prefers-color-scheme: dark)": {
      colorScheme: "dark",
    },
  },
});

globalStyle("body", {
  "@media": {
    "(prefers-color-scheme: dark)": {
      color: "white",
      backgroundColor: "black",
    },
  },
});

globalStyle("i", {
  border: "solid 2px mediumspringgreen",
  padding: ".5rem",
  display: "inline-flex",
  borderRadius: "4px",
  color: "mediumspringgreen",
});
