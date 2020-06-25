import axios from "axios";

export default {
  // Gets all plants
  getPlants: function() {
    return axios.get("/api/plants");
  },
  // Gets the plant with the given id
  getPlant: function(id) {
    return axios.get("/api/plants/" + id);
  },
  // Deletes the plant with the given id
  deletePlant: function(id) {
    return axios.delete("/api/plants/" + id);
  },
  // Saves a plant to the database
  savePlant: function(plantData) {
    return axios.post("/api/plants", plantData);
  },
  // Searches Trefle through our back end
  searchPlantName: function(searchName) {
    return axios.get(`/api/plants/species/${searchName}`);
  },
  // Find recent plants saved to the db
  findRecent: function() {
    return axios.get('/api/plants/recent');
  },
  // Get details on a specific plant
  plantDetails: function(plantId) {
    console.log(`called utils/API.js plantDetails for id ${plantId}`)
    return axios.get(`/api/trefle/species/${plantId}`);
  }
};