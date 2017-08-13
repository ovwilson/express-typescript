"use strict";
exports.__esModule = true;
var express = require("express");
var index_1 = require("./controllers/index");
var app = express();
var PORT = 3000;
app.route('/').get(index_1.index);
app.listen(PORT, function () { return console.log("Express Server Running on port " + PORT); });
module.exports = app;
//# sourceMappingURL=server.js.map