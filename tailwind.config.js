/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export const content = ["./src/**/*.{html,ts}"];
export const theme = {
  colors: {
    "black-main": "#121212",
    "spotify-green": "#1FDF64",
    "black-secondary": "#242424",
    "spotify-gray": "#2A2A2A",
    subtitle: "#949494",
    transparent: "transparent",
    current: "currentColor",
    black: colors.black,
    white: "#f7f7f7",
    gray: colors.gray,
    emerald: colors.emerald,
    indigo: colors.indigo,
    yellow: colors.yellow,
  },
  extend: {},
};
export const plugins = [];
