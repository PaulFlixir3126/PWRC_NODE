const userModel = require("../models/gensetMaster.model").userSchema;
const userService = require("../services/userService");

exports.addUsers = async (req, res) => {
  try {
    var schemaPayload = new userModel(req.body);
    await schemaPayload
      .save()
      .then((response) => {
        res.status(200).send({
          message: "Added",
          status: true,
        });
      })
      .catch((error) => {
        res.status(500).send({
          message:
            error.message ||
            "Some error occurred while adding.",
        });
      });
  } catch (error) {
    res.status(500).send({ errorMessage: err.message });
  }
};

exports.fetchUsersList = async (req, res) => {
  try {
    let getUserList = await userService.getUserValue(findquery);
    if (!getUserList.status) {
      return res.status(500).send({
        status: false,
        message: getUserList.message,
        data: getUserList.data,
      });
    }

    // /**if data notfound */
    if (getUserList.status && getUserList.data.length == 0) {
      return res
        .status(200)
        .send({ status: false, message: "NotFound", data: getUserList.data });
    }

    // /**success response */
    return res.status(200).send({
      status: true,
      message: "fetched successfully",
      data: getUserList.data,
    });
  } catch (error) {
    res.status(500).send({ errorMessage: err.message });
  }
};

