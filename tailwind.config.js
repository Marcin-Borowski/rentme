// @ts-check
import { join } from "path";

import { RentMeTheme } from "./src/theme.js";

// 1. Import the Skeleton plugin
import { skeleton } from "@skeletonlabs/tw-plugin";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts}",

    join(
      require.resolve("@skeletonlabs/skeleton"),
      "../**/*.{html,js,svelte,ts}"
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    skeleton({
      themes: {
        custom: [RentMeTheme],
      },
    }),
  ],
};
