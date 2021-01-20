const cityModel = require("../models/city.model").citySchema;
const cityService = require("../services/cityService");

exports.addCity = async (req, res) => {
  try {
    var schemaPayload = new cityModel(req.body);
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

exports.fetchCitysList = async (req, res) => {
  try {
    let getCityList = await cityService.getCityValue(findquery);
    if (!getCityList.status) {
      return res.status(500).send({
        status: false,
        message: getCityList.message,
        data: getCityList.data,
      });
    }

    // /**if data notfound */
    if (getCityList.status && getCityList.data.length == 0) {
      return res
        .status(200)
        .send({ status: false, message: "NotFound", data: getCityList.data });
    }

    // /**success response */
    return res.status(200).send({
      status: true,
      message: "fetched successfully",
      data: getCityList.data,
    });
  } catch (error) {
    res.status(500).send({ errorMessage: err.message });
  }
};

