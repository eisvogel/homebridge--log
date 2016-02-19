"use strict";

var chalk = require("chalk");

module.exports = function (homebridge) {
	require("log-prefix")(function () {
		return chalk.gray(`${new Date().toLocaleString()} > `) + "%s";
	});
}
