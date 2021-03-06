const express = require("express");
var session = require("express-session");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
var cookieParser = require("cookie-parser");

require("dotenv").config();
var cors = require("cors");

// Use express session
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "SOMERANDOMSECRETHERE",
    cookie: { maxAge: 60000 },
  })
);

// Middlewares
// app.use(require("connect").bodyParser());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
var indexRoutes = require("./routes/indexRouter/indexRouter");
var findRoutes = require("./routes/find/find");
var updateRouter = require("./routes/update/update");
var insertRouter = require("./routes/insert/insert");
var removeRouter = require("./routes/remove/remove");
var signInRouter = require("./routes/signin/signIn");

let connect = () => {
  mongoose.connection
    .on("error", console.log)
    .on("disconnected", connect)
    .once("open", listen);
  return mongoose.connect(process.env.DATABASE, {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const port = process.env.PORT || 9000;
let listen = () => {
  app.listen(port, () => {
    console.log(`Listening at port ${port}`);
  });
};

app.use("/", indexRoutes);
app.use("/signIn/", signInRouter);
app.use("/find", findRoutes);
app.use("/update/", updateRouter);
app.use("/insert/", insertRouter);
app.use("/remove/", removeRouter);

connect();

module.exports = app;
