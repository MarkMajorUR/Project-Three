const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const verifyToken = require("./routes/validate-token");

dotenv.config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use("/api/user", authRoutes);

// This route is protected with token
app.use("/api/dashboard", verifyToken, dashboardRoutes);

app.use(routes);




// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/empowerDB",
// mongoose.connect("mongodb://localhost/empowerDB",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    } 
 );

// Start the API server
app.listen(PORT, function() {
  console.log(`\n 🌎  ==> API Server now listening on PORT ${PORT}!`);
});
