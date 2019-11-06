// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require("axios");

module.exports = function(api) {
  api.loadSource(async actions => {
    const { data } = await axios.get(
      "https://quebec-realtor-api.herokuapp.com/api/v1/data"
    );

    /* const { images } = await axios.get(
      "https://quebec-realtor-api.herokuapp.com/api/v1/gallery"
    ); */

    const collection = actions.addCollection({
      typeName: "RealEstate",
      route: "proprietes/:id"
    });

    /* const gallery = actions.addCollection({
      typeName: "Gallery"
    });

    for (const image of images.results) {
      gallery.addNode({
        id: image.id,
        photos: image.photos
      });
    } */

    for (const item of data.results) {
      collection.addNode({
        id: item.id,
        content: item.description,
        price: item.price,
        longitude: item.longitude,
        latitude: item.latitude,
        address: item.streetAddress,
        postalCode: item.postalCode,
        locality: item.locality,
        images: item.singleImg, //store.createReference(gallery, item.id)
        building: {
          BathroomTotal: item.building.bathrooms,
          Showerroms: item.building.showerrooms,
          Bedrooms: item.building.bedrooms,
          Rooms: item.building.rooms,
          Year: item.building.constructionYear,
          StoriesTotal: Math.round(parseInt(item.building.StoriesTotal)),
          Type: item.type
        },
        dimensions: {
          SizeTotal: item.dimensions.totalArea,
          privateArea: item.dimensions.privateArea,
          depth: item.dimensions.depth,
          width: item.dimensions.width
        },
        URLFr: item.url
      });
    }
  });
};
