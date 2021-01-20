const cityModel = require("../models/city.model").citySchema

module.exports = {
  saveCityValue: async (payload) => {
    try {
      let cityPayloadObject = new cityModel(payload);
      let result = await cityPayloadObject.save();
      if (result) {
        return { status: true, data: result, message: "ok" };
      }
      return { status: false, data: result, message: "faild to save" };
    } catch (error) {
      return { status: false, data: [], message: error.message };
    }
  },

  getCityValue: async (findquery) => {
    try {
      console.log(findquery);
      let result = await cityModel.find(findquery);
      if (result) {
        return { status: true, data: result, message: "ok" };
      }
      return { status: false, data: result, message: "faild to get result" };
    } catch (error) {
      return {
        status: false,
        message: `MongoError: ${error.message}`,
        data: [],
      };
    }
  },
};
