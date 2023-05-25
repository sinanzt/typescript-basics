"use strict";
exports.__esModule = true;
var exp_module_1 = require("./exp-module");
var email = 'john.doe@typescripttutorial.net';
var validator = new exp_module_1.EmailValidator();
var result = validator.isValid(email);
console.log(result);
