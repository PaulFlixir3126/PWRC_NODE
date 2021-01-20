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
  var genset = require("../routes/gen.routes");
  app.use("/api/genset", genset);
};
module.exports = appRouter;
 