#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var greeting_1 = require("../lib/greeting");
console.log(process.argv);
var name = process.argv.splice(2)[0];
var message = greeting_1.greeting(name);
console.log(message);
