// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Load Work Sans typeface
require("typeface-work-sans");
// Load Libre Franklin typeface
import "@fontsource/libre-franklin"; // Defaults to weight 400.
// Load Fira Sans typeface
import "@fontsource/fira-sans"; // Defaults to weight 400.
import "@fontsource/fira-sans/300.css";

import DefaultLayout from "~/layouts/Default.vue";

import VueAgile from "vue-agile";

export default function(Vue, { router, head, isClient }) {
  Vue.use(VueAgile);
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  // Add attributes to HTML tag
  head.htmlAttrs = { style: "scroll-behavior: smooth;" };

  // Add an external CSS file
  head.link.push({
    rel: "stylesheet",
    href: "https://api.mapbox.com/mapbox-gl-js/v1.3.1/mapbox-gl.css",
  });
}
