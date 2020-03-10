const express = require('express');
const path = require("path");
const favicon = require('express-favicon');


const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(__dirname + '/public/favicon.png'));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get('/', (req,res,next) => {
  res.render("index", {title: "Optimize Server-Side Example"})
});


const PORT = process.env.PORT || '8080';
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
}

module.exports = app;
