var app = require("./src/app");
var sequelize = require("./src/config/database");

sequelize
  .authenticate()
  .then(function () {
    // console.log("MySQL connected successfully");
    console.log("MySQL connected successfully");

    // Syncs the models to the database (creates tables if they don't exist)
    sequelize
      .sync({ alter: true })
      .then(() => {
        console.log("Database synced successfully");
        app.listen(3000, function () {
          console.log("Server running on port 3000");
        });
      })
      .catch((err) => {
        console.error("Database sync failed:", err.message);
      });
  })
  .catch(function (err) {
    console.error("DB connection failed:", err.message);
  });
