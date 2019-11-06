// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Load Work Sans typeface
require("typeface-work-sans");

import DefaultLayout from "~/layouts/Default.vue";

import VueAgile from "vue-agile";
import mapboxgl from "mapbox-gl";

export default function(Vue, { router, head, isClient }) {
  Vue.use(VueAgile);
  Vue.use(mapboxgl);
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  // Add an external CSS file
  head.link.push({
    rel: "stylesheet",
    href: "https://api.mapbox.com/mapbox-gl-js/v1.3.1/mapbox-gl.css"
  });
}
