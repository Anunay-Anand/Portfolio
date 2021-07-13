//Importing express and all other modules on top
const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");
const methodOverride = require("method-override");

//User data modules
const userProjects = require("./userData/projecthelper.js");

//Setting up the view engine and it's directory
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//All Express middleware/ Static files
app.use(express.urlencoded({ extended: true })); //req.body is parsed as a form
app.use(methodOverride("_method")); //Setting the query for method-override
app.use(express.static(path.join(__dirname, "public"))); //It will serve our static files

//Default Index/Home Route
//We don't need to add backslash when rendering view pages
app.get("/", async (req, res) => {
  try {
    //Fetch the incoming JSON data
    const data = await JSON.stringify(userProjects);
    //Parse it into JavaScript Object
    const projects = await JSON.parse(data);
    res.render("homepage", { projects });
  } catch (e) {
    console.log(e);
  }
});

// Experience Route
app.get("/experience", (req, res) => {
  res.render("experience");
});

// Experience Route
app.get("/project", async (req, res) => {
  try {
    //Fetch the incoming JSON data
    const data = await JSON.stringify(userProjects);
    //Parse it into JavaScript Object
    const projects = await JSON.parse(data);
    res.render("project", { projects });
  } catch (e) {
    console.log(e);
  }
});

//Starting up server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serving on the port: ${port}`);
});
