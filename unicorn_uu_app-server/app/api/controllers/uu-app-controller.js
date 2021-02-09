"use strict";
const UuAppAbl = require("../../abl/uu-app-abl.js");

class UuAppController {
  init(ucEnv) {
    return UuAppAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
}

module.exports = new UuAppController();
