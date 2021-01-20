// const genericValidator = require("./genericValidator");
// const userService = require("../services/userService");
// const genericHelper = require("../helpers/generic.helper");

// exports.update = async (params, body) => {
//   let mandatoryFiledsInParams = ["userId"];
//   let checkInParams = genericValidator.checkall(
//     Object.keys(params),
//     mandatoryFiledsInParams
//   );
//   if (!checkInParams) {
//     return {
//       status: false,
//       code: 400,
//       type: "invalidRequest",
//       message: "mandatory fileds are missing in params",
//       data: mandatoryFiledsInParams,
//     };
//   }

//   let findCandid = await userService.getUser({ userId: params.userId });
//   console.log("findCandid", findCandid);
//   if (!findCandid.status) {
//     return {
//       status: false,
//       code: 500,
//       type: "internalerror",
//       message: findCandid.message,
//       data: findCandid.data,
//     };
//   }

//   if (findCandid.status && findCandid.data.length == 0) {
//     return {
//       status: false,
//       code: 404,
//       type: "NotFound",
//       message: "userId not found",
//       data: params.userId,
//     };
//   }

//   return {
//     status: true,
//     code: 200,
//     type: "success",
//     message: "all validations passed",
//     data: [],
//   };
// };

// exports.delete = async (params) => {
//   let mandatoryFiledsInParams = ["userId"];
//   let checkInParams = genericValidator.checkall(
//     Object.keys(params),
//     mandatoryFiledsInParams
//   );
//   if (!checkInParams) {
//     return {
//       status: false,
//       code: 400,
//       type: "invalidRequest",
//       message: "mandatory fileds are missing in params",
//       data: mandatoryFiledsInParams,
//     };
//   }

//   let findCandid = await jobseekerDal.getJobseeker({ userId: params.userId });
//   console.log("findCandid", findCandid);
//   if (!findCandid.status) {
//     return {
//       status: false,
//       code: 500,
//       type: "internalerror",
//       message: findCandid.message,
//       data: findCandid.data,
//     };
//   }

//   if (findCandid.status && findCandid.data.length == 0) {
//     return {
//       status: false,
//       code: 404,
//       type: "NotFound",
//       message: "userId not found",
//       data: params.userId,
//     };
//   }

//   return {
//     status: true,
//     code: 200,
//     type: "success",
//     message: "all validations passed",
//     data: [],
//   };
// };

// exports.UserVerifyRegistrationMail = async (body, headers) => {
//   let mandatoryFiledsInBody = ["userId"];
//   let checkInBody = genericValidator.checkall(
//     Object.keys(body),
//     mandatoryFiledsInBody
//   );
//   if (!checkInBody) {
//     return {
//       status: false,
//       code: 400,
//       type: "invalidRequest",
//       message: `mandatory fileds are missing in body`,
//       data: mandatoryFiledsInBody,
//     };
//   }

//   let findUser = await userService.getUser({ userId: body.userId });
//   if (!findUser.status) {
//     return {
//       status: false,
//       code: 500,
//       type: "internalerror",
//       message: findUser.message,
//       data: findUser.data,
//     };
//   }
//   /**if userId not exist */
//   if (findUser.status && findUser.data.length == 0) {
//     return {
//       status: false,
//       code: 404,
//       type: "NotFound",
//       message: "userId NotFound",
//       data: body.userId,
//     };
//   }

//   /**if user already active */
//   if (findUser.status && findUser.data[0].userActive) {
//     return {
//       status: false,
//       code: 409,
//       type: "conflict",
//       message: "user already activated",
//       data: body.userId,
//     };
//   }

//   /**decode the token, decoded email and decode userId should match with database user and email */
//   let checkUserwithJwt = await genericHelper.jwtDecode(headers.token);

//   console.log(checkUserwithJwt);
//   if (!checkUserwithJwt.status) {
//     return {
//       status: false,
//       code: 500,
//       message: checkUserwithJwt.message,
//       data: [],
//     };
//   }
//   if (checkUserwithJwt.status) {
//     if (checkUserwithJwt.data.userId !== findUser.data[0].userId) {
//       return {
//         status: false,
//         code: 409,
//         message: "Token userId and db userId conflict",
//         data: {
//           dbUserId: findUser.data[0].userId,
//           tokenUserId: checkUserwithJwt.data.userId,
//         },
//       };
//     }

//     if (checkUserwithJwt.data.username !== findUser.data[0].email) {
//       return {
//         status: false,
//         code: 409,
//         message: "Token email and db email conflict",
//         data: {
//           dbUserEmail: findUser.data[0].email,
//           tokenUserEmail: checkUserwithJwt.data.username,
//         },
//       };
//     }
//   } else {
//     return {
//       status: false,
//       code: 409,
//       type: "error",
//       message: "Error decode failed",
//     };
//   }

//   return {
//     status: true,
//     code: 200,
//     type: "success",
//     message: "all validations passed",
//     data: [],
//   };
// };
