const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/public"));

// connecting with MongoDB via mongoose at our myapp database running locally on default port 27017
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/budget", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false 
})
    .then(() => console.log('MongoDB Database connected successfully.'))
    .catch(err => console.log('Error:- ' + err ));

// routes
app.use(require(`./routes/api.js`));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});