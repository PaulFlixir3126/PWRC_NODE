const userModel = require("../models/gensetMaster.model").userSchema

module.exports = {
  saveUserValue: async (payload) => {
    try {
      let userPayloadObject = new userModel(payload);
      let result = await userPayloadObject.save();
      if (result) {
        return { status: true, data: result, message: "ok" };
      }
      return { status: false, data: result, message: "faild to save" };
    } catch (error) {
      return { status: false, data: [], message: error.message };
    }
  },

  getUserValue: async (findquery) => {
    try {
      console.log(findquery);
      let result = await userModel.find(findquery);
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
