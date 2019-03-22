#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var lcd_1 = require("./lcd");
if (process.argv[2]) {
    console.log(lcd_1.buildLCDString(process.argv[2]));
}
else {
    console.log("Please provide some numerical characters as CLi argument");
}
