var appRouter = new Object();
// const jwtController = require("../controllers/jwt.controller");
// const genericHelper = require("../helpers/generic.helper");
appRouter.initialize = function (app) {
  // const middleware = async (req, res, next) => {
  //   // return next();
  //   if (typeof req.headers.token == "undefined" || req.headers.token === null) {
  //     return res
  //       .status(400)
  //       .send({ status: false, message: "Please pass token", data: [] });
  //   }
  //   let jwtverify = await genericHelper.jwtVerify(req.headers.token);
  //   if (jwtverify.status) {
  //     console.log("Authentication Success");
  //     return next();
  //   }
  //   console.log("Authentication Failed");
  //   return res
  //     .status(401)
  //     .send({ status: false, message: "unauthorized-access", data: [] });
  // };
  /*### default route ###*/
  var asset = require("../routes/asset.routes");
  app.use("/api/asset", asset);
  var assetType = require("../routes/assetType.routes");
  app.use("/api/assetType", assetType);
  var beacon = require("../routes/beacon.routes");
  app.use("/api/beacon", beacon);
  var location = require("../routes/location.routes");
  app.use("/api/location", location);
  var zone = require("../routes/zone.routes");
  app.use("/api/zone", zone);
  var sector = require("../routes/sector.routes");
  app.use("/api/sector", sector);
};
module.exports = appRouter;
