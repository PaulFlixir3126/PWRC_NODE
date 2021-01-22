const gensetModel = require("../models\/gen.model").gensetSchema

module.exports = {
  savegensetValue: async (payload) => {
    try {
      let gensetPayloadObject = new gensetModel(payload);
      let result = await gensetPayloadObject.save();
      if (result) {
        return { status: true, data: result, message: "ok" };
      }
      return { status: false, data: result, message: "faild to save" };
    } catch (error) {
      return { status: false, data: [], message: error.message };
    }
  },
  savedata: async (payload) => {
    try {
      // let gensetPayloadObject = new gensetModel(payload);
      // let result = await new gensetModel(payload) payload.save();
      let gensetPayloadObject = new gensetModel(payload);
      let result = await gensetPayloadObject.save();
      if (result) {
        return { status: true, data: result, message: "ok" };
      }
      return { status: false, data: result, message: "faild to save" };
    } catch (error) {
      return { status: false, data: [], message: error.message };
    }
  },
  getgensetValue: async (findquery) => {
    try {
      console.log(findquery);
      let result = await gensetModel.find(findquery);
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
