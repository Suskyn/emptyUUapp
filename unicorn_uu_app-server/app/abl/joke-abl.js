"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/joke-error.js");

const WARNINGS = {
  getJokeUnsupportedKeys: {
    code: `${Errors.Get.UC_CODE}unsupportedKeys`,
  },
  listJokeUnsupportedKeys: {
    code: `${Errors.List.UC_CODE}unsupportedKeys`,
  },
  deleteJokeUnsupportedKeys: {
    code: `${Errors.Delete.UC_CODE}unsupportedKeys`,
  },
  createJokeUnsupportedKeys: {
    code: `${Errors.Create.UC_CODE}unsupportedKeys`,
  },
  categoryJokeUnsupportedKeys: {
    code: `${Errors.Category.UC_CODE}unsupportedKeys`,
  },
  getcategoryJokeUnsupportedKeys: {
    code: `${Errors.Getcategory.UC_CODE}unsupportedKeys`,
  },
  listcategoryJokeUnsupportedKeys: {
    code: `${Errors.Listcategory.UC_CODE}unsupportedKeys`,
  },
  deletecategoryJokeUnsupportedKeys: {
    code: `${Errors.Deletecategory.UC_CODE}unsupportedKeys`,
  },
  createcategoryJokeUnsupportedKeys: {
    code: `${Errors.Createcategory.UC_CODE}unsupportedKeys`,
  },
}







class JokeAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("joke");
  }

  async deletecategory(awid, dtoIn) {
    let validationResult = this.validator.validate("deletecategoryJokeDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.deletecategoryJokeUnsupportedKeys.code,
      Errors.Deletecategory.InvalidDtoIn
    );
    dtoIn.awid = awid;
    let dtoOut = {}
    try {
      dtoOut= await this.dao.deletecategory(dtoIn);
    } catch (e) {
      throw e;
    }
    return dtoOut
  }
  async createcategory(awid, dtoIn) {
    let validationResult = this.validator.validate("createcategoryJokeDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createcategoryJokeUnsupportedKeys.code,
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
    let validationResult = this.validator.validate("listcategoryJokeDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.listcategoryJokeUnsupportedKeys.code,
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
    let validationResult = this.validator.validate("getcategoryJokeDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getcategoryJokeUnsupportedKeys.code,
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

    let validationResult = this.validator.validate("categoryJokeDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.categoryJokeUnsupportedKeys.code,
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
  async delete(awid, dtoIn) {
    let validationResult = this.validator.validate("deleteJokeDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.deleteJokeUnsupportedKeys.code,
      Errors.Delete.InvalidDtoIn
    );


    let dtoOut = {}
    try {
      dtoOut= await this.dao.delete(awid, dtoIn.id);
    } catch (e) {
      throw e;
    }

    return dtoOut

  }

  async get(awid, dtoIn) {
    let validationResult = this.validator.validate("getJokeDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getJokeUnsupportedKeys.code,
      Errors.Get.InvalidDtoIn
    );


    let dtoOut = {}
    try {
      dtoOut= await this.dao.get(awid, dtoIn.id);
    } catch (e) {
      throw e;
    }

    return dtoOut


  }

  async list(awid, dtoIn) {



    let dtoOut = {}
    try {
      dtoOut= await this.dao.list();
    } catch (e) {
      throw e;
    }

    return dtoOut



  }

  async create(awid, dtoIn) {
    let validationResult = this.validator.validate("createJokeDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createJokeUnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    dtoIn.awid = awid;
    let dtoOut = {}
    try {
     dtoOut= await this.dao.create(dtoIn);
    } catch (e) {
      throw e;
    }

return dtoOut



  }


}

module.exports = new JokeAbl();
