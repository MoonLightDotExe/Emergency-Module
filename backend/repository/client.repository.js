const dotenv = require('dotenv').config()

const self = (module.exports = {
  getServices: (body) => { },
  addPing: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        //function to get sorted array of locations by distance
        function sortLocationsByDistance(locations, givenLocation) {
          // Function to calculate Euclidean distance between two locations
          function calculateDistance(location1, location2) {
            const x1 = location1.latitude;
            const y1 = location1.longitude;
            const x2 = location2.latitude;
            const y2 = location2.longitude;

            return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
          }

          // Sort locations array based on distance from the given location
          return locations.sort((location1, location2) => {
            const distance1 = calculateDistance(givenLocation, location1);
            const distance2 = calculateDistance(givenLocation, location2);

            return distance1 - distance2;
          });
        }

        const userLocation = body.location;
        const locationsArray = this.getServices(body.type);
        const sortedLocations = sortLocationsByDistance(locationsArray, userLocation);
        console.log(sortedLocations);
        resolve(sortedLocations);
      } catch (error) {
        reject(error);
      }
    })
  }
})
