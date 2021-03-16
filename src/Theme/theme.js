
const dark = "#232946";
const light = "#fef6e4";

const themeLight = {
  background: light,
  body: dark
};

const themeDark = {
  background: dark,
  body: light,
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;