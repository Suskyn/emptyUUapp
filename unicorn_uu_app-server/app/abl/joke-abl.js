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
  setRatingJokeUnsupportedKeys: {
    code: `${Errors.SetRating.UC_CODE}unsupportedKeys`,
  },
}







class JokeAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("joke");
  }

  async setRating(awid, dtoIn,rating) {
    let validationResult = this.validator.validate("setRatingJokeDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.setRatingJokeUnsupportedKeys.code,
      Errors.SetRating.InvalidDtoIn
    );
    let ratings = [];
    ratings.push(rating);
    let dtoOut = {}
    try {
      dtoOut= await this.dao.setRating(awid, ratings);

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
      Errors.Get.InvalidDtoIn);
    delete dtoOut.ratings;
    let averageRating = 0;
    let ratingsSum = 0;
    let totalRatings = 0;
    jokeRatings.forEach(rating => {
      ratingsSum = ratingSum + rating;
      totalratings++
      });
    averageRating = ratingsSum/totalRatings;

    let dtoOut = {}
    try {
      dtoOut= await this.dao.get(awid, dtoIn.id, averageRating);
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
