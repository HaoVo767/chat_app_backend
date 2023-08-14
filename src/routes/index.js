const iconRouter = require("./icons");
const personalRouter = require("./personal");
const createRouter = require("./createNewPost");
const updateLikeRouter = require("./updateLike");
function route(app) {
  app.use("/icons", iconRouter);
  app.use("/user", personalRouter);
  app.use("/me", createRouter);
  app.use("/update-like", updateLikeRouter);
}

module.exports = route;
