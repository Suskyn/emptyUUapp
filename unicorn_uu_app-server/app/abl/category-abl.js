"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/category-error.js");

const WARNINGS = {
  getCategoryUnsupportedKeys: {
    code: `${Errors.Getcategory.UC_CODE}unsupportedKeys`,
  },
  categoryUnsupportedKeys: {
    code: `${Errors.Category.UC_CODE}unsupportedKeys`,
  },
  listCategoryUnsupportedKeys: {
    code: `${Errors.Listcategory.UC_CODE}unsupportedKeys`,
  },
  deleteCategoryUnsupportedKeys: {
    code: `${Errors.Deletecategory.UC_CODE}unsupportedKeys`,
  },
  createCategoryUnsupportedKeys: {
    code: `${Errors.Createcategory.UC_CODE}unsupportedKeys`,
  },
}







class CategoryAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("category");
  }

  async deletecategory(awid, dtoIn) {
    let validationResult = this.validator.validate("deleteCategoryDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.deleteCategoryUnsupportedKeys.code,
      Errors.Deletecategory.InvalidDtoIn,

        let dtoOut = {}

    );
    try {
      dtoOut= await this.dao.deletecategory(awid, dtoIn.id);
    } catch (e) {
      throw e;
    }
    return dtoOut
  }
  async createcategory(awid, dtoIn) {
    let validationResult = this.validator.validate("createCategoryDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createCategoryUnsupportedKeys.code,
      Errors.Createcategory.InvalidDtoIn
    );
    dtoIn.awid = awid;
    let dtoOut = {}
    try {
      dtoOut= await this.dao.createcategory(dtoIn);
    } catch (e) {
      throw e;
    }
    return dtoOut
  }
  async listcategory(awid, dtoIn) {
    let validationResult = this.validator.validate("listCategoryDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.listCategoryUnsupportedKeys.code,
      Errors.Listcategory.InvalidDtoIn
    );

    let dtoOut = {}
    try {
      dtoOut= await this.dao.listcategory(dtoIn);
    } catch (e) {
      throw e;
    }
    return dtoOut
  }
  async getcategory(awid, dtoIn) {
    let validationResult = this.validator.validate("getCategoryDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getCategoryUnsupportedKeys.code,
      Errors.Getcategory.InvalidDtoIn
    );

    let dtoOut = {}
    try {
      dtoOut= await this.dao.getcategory(dtoIn);
    } catch (e) {
      throw e;
    }
    return dtoOut
  }
  async category(awid, dtoIn) {

    let validationResult = this.validator.validate("categoryDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.categoryUnsupportedKeys.code,
      Errors.Category.InvalidDtoIn
    );

    let dtoOut = {}
    try {
      dtoOut= await this.dao.category(dtoIn);
    } catch (e) {
      throw e;
    }
    return dtoOut

  }



}

module.exports = new CategoryAbl();
