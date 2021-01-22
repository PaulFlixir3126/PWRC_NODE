const gensetModel = require("../models/gen.model").gensetSchema;
const gensetService = require("../services/gensetService");

exports.gensetAdd = async (req, res) => {
  try {
    console.log(req.body);
    await gensetService.savedata(req.body);
    // var schemaPayload = new gensetModel(req.body);
    // await schemaPayload
    //   .save()
    //   .then((response) => {
    //     res.status(200).send({
    //       message: "Added",
    //       status: true,
    //     });
    //   })
    //   .catch((error) => {
    //     res.status(500).send({
    //       message:
    //         error.message ||
    //         "Some error occurred while adding.",
    //     });
    //   });
  } catch (error) {
    res.status(500).send({ errorMessage: err.message });
  }
};

exports.fetchgensetsList = async (req, res) => {
  try {
    let getgensetList = await gensetService.getgensetValue(findquery);
    if (!getgensetList.status) {
      return res.status(500).send({
        status: false,
        message: getgensetList.message,
        data: getgensetList.data,
      });
    }
    // /**if data notfound */
    if (getgensetList.status && getgensetList.data.length == 0) {
      return res
        .status(200)
        .send({ status: false, message: "NotFound", data: getgensetList.data });
    }

    // /**success response */
    return res.status(200).send({
      status: true,
      message: "fetched successfully",
      data: getgensetList.data,
    });
  } catch (error) {
    res.status(500).send({ errorMessage: err.message });
  }
};

