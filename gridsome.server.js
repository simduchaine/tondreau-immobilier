// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require("axios");
const querystring = require("querystring");

module.exports = function(api) {
  api.loadSource(async (actions) => {
    const { data } = await axios.post(
      "https://api.realtor.ca/Listing.svc/PropertySearch_Post",
      querystring.stringify({
        individualID: 1944929,
        CultureId: 2,
        ApplicationId: 1,
        PropertySearchTypeId: 1,
        RecordsPerPage: 100,
      })
    );

    /* const { images } = await axios.get(
      "https://quebec-realtor-api.herokuapp.com/api/v1/gallery"
    ); */

    const collection = actions.addCollection({
      typeName: "RealEstate",
      route: "proprietes/:id",
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

    for (const item of data.Results) {
      collection.addNode({
        id: item.Id,
        changeDate: item.PhotoChangeDateUTC,
        content: item.PublicRemarks,
        price: item.Property.Price,
        longitude: item.Property.Address.Longitude,
        latitude: item.Property.Address.Latitude,
        address: item.Property.Address.AddressText.replace("|", ", "),
        shortAddress: item.Property.Address.AddressText.substring(
          0,
          item.Property.Address.AddressText.indexOf("|")
        ),
        postalCode: item.PostalCode,
        //locality: item.locality,
        image: item.Property.Photo[0].HighResPath,
        building: {
          BathroomTotal: item.Building.BathroomTotal,
          //Showerroms: item.building.showerrooms,
          Bedrooms: item.Building.Bedrooms,
          //Rooms: item.building.rooms,
          //Year: item.building.constructionYear,
          StoriesTotal: Math.round(parseInt(item.Building.StoriesTotal)),
          Type: item.Building.Type,
          Ownership: item.Property.OwnershipType,
        },
        dimensions: {
          SizeTotal: item.Land.SizeTotal,
          SizeInterior: item.Building.SizeInterior,
          //privateArea: item.dimensions.privateArea,
          //depth: item.dimensions.depth,
          //width: item.dimensions.width
        },
        URLFr: item.RelativeURLFr,
      });
    }
  });
};
