"use strict";
exports.__esModule = true;
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
var lcd_1 = require("./lcd");
var os_1 = require("os");
var usage = 'Please give a number to display in LCD format (any non numeric character will be skiped)';
readline.question(usage + os_1.EOL, function (input) {
    console.log(lcd_1.buildLCDString(input));
    readline.close();
});
