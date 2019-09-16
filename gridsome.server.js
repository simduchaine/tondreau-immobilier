// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require("axios");
const querystring = require("querystring");

module.exports = function(api) {
  api.loadSource(async store => {
    const { data } = await axios.post(
      "https://api2.realtor.ca/Listing.svc/PropertySearch_Post",
      querystring.stringify({
        individualID: 1944929,
        CultureId: 2,
        ApplicationId: 1,
        PropertySearchTypeId: 1
      })
    );

    const contentType = store.addContentType({
      typeName: "RealEstate",
      route: "estate/:id"
    });

    for (const item of data.Results) {
      contentType.addNode({
        id: item.Id,
        PhotoChangeDateUTC: item.PhotoChangeDateUTC,
        content: item.PublicRemarks,
        price: item.Property.Price,
        address: item.Property.Address.AddressText.replace("|", ", "),
        shortAddress: item.Property.Address.AddressText.substring(
          0,
          item.Property.Address.AddressText.indexOf("|")
        ),
        image: item.Property.Photo[0].HighResPath,
        building: {
          BathroomTotal: item.Building.BathroomTotal,
          Bedrooms: item.Building.Bedrooms,
          SizeInterior: item.Building.SizeInterior,
          StoriesTotal: item.Building.StoriesTotal,
          Type: item.Building.Type
        }
      });
    }
  });
};
