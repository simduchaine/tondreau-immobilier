<template>
  <div id="mapGL" class="h-500"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
require("../../node_modules/mapbox-gl/dist/mapbox-gl.css");
export default {
  name: "MapGL",
  props: ["allestate", "isSingle", "long", "lat", "path", "address", "image"],
  mounted() {
    this.createMap();
  },
  methods: {
    createMap() {
      if (this.isSingle) {
        mapboxgl.accessToken = process.env.GRIDSOME_MAPBOX_TOKEN;
        this.map = new mapboxgl.Map({
          container: "mapGL",
          style: "mapbox://styles/mapbox/light-v10",
          minzoom: 11,
          center: [this.long, this.lat],
          zoom: 13
        });
        this.addMarkers();
      } else {
        mapboxgl.accessToken = process.env.GRIDSOME_MAPBOX_TOKEN;
        this.map = new mapboxgl.Map({
          container: "mapGL",
          style: "mapbox://styles/mapbox/light-v10",
          minzoom: 11,
          center: [-71.2793, 46.8711],
          zoom: 11
        });
        this.addMarkers();
      }
    },
    addMarkers() {
      if (this.isSingle) {
        // create a HTML element
        const markerEl = document.createElement("div");
        markerEl.className = "marker";
        // make a marker for each feature and add to the map
        new mapboxgl.Marker(markerEl)
          .setLngLat([this.long, this.lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
              .setHTML(
                "<img src=" +
                  this.image +
                  " /><h3 class='font-display'>" +
                  this.address +
                  "</h3>"
              )
          )
          .addTo(this.map);
      } else {
        this.allestate.forEach(edge => {
          // create a HTML element for each edge
          const markerEl = document.createElement("div");
          markerEl.className = "marker";
          // make a marker for each feature and add to the map
          new mapboxgl.Marker(markerEl)
            .setLngLat([edge.node.longitude, edge.node.latitude])
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML(
                  "<a href=" +
                    edge.node.path +
                    "><img src=" +
                    edge.node.images[0] +
                    " /><h3 class='font-display'>" +
                    edge.node.address +
                    "</h3></a>"
                )
            )
            .addTo(this.map);
        });
      }
    }
  }
};
</script>

<style>
#mapGL .marker {
  background-image: url("../assets/img/Ellipse.svg");
  background-size: cover;
  width: 25px;
  height: 25px;
  cursor: pointer;
}

#mapGL .mapboxgl-popup {
  max-width: 200px;
}

#mapGL .mapboxgl-popup-content {
  text-align: center;
}
</style>