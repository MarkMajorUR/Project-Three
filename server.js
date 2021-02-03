const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

const authRoutes = require("./routes/auth");

dotenv.config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use("/api/user", authRoutes);
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/empowerDB",
//  { useNewUrlParser: true, useUnifiedTopology: true }
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    } 
 );


// Start the API server
app.listen(PORT, function() {
  
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  // hello
});
