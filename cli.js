#! env node
"use strict";

const createConway = require("./conway");

const argv = require("yargs")
  .option("start", { default: "1" })
  .option("depth", { default: 1 })
  .help().argv;

const conway = createConway();
const { start, depth } = argv;
const result = conway.draw(start, depth);
console.log(result);
