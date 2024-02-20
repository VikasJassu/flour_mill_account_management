const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).reject((error) =>
      next(error)
    );
  };
};

export { asyncHandler };

//if we want to use try catch instead of Promise/reject, then use following code
// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     return res.status(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
