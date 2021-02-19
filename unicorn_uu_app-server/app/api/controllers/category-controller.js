"use strict";
const CategoryAbl = require("../../abl/category-abl.js");

class CategoryController {
  deletecategory(ucEnv) {
    return CategoryAbl.deletecategory(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  createcategory(ucEnv) {
    return CategoryAbl.createcategory(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  listcategory(ucEnv) {
    return CategoryAbl.listcategory(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  getcategory(ucEnv) {
    return CategoryAbl.getcategory(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  category(ucEnv) {
    return CategoryAbl.category(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
}

module.exports = new CategoryController();
