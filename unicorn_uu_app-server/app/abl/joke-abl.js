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

  async setRating(awid, dtoIn) {
    let validationResult = this.validator.validate("setRatingJokeDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.setRatingJokeUnsupportedKeys.code,
      Errors.SetRating.InvalidDtoIn
    );
    let joke = await this.dao.get(awid, dtoIn.id); //try catch na overenie joke if(!joke) // joke neexistuje
    try {
      joke = await this.dao.get(awid, dtoIn.id)
    } catch {
      Errors.SetRating.InvalidDtoIn
    }
    let ratings = joke.ratings || [];
    ratings.push({rating: dtoIn.rating});
    let dtoOut = {}
    joke.ratings= ratings
    dtoIn.awid= awid
    try {
      dtoOut= await this.dao.setRating(joke);

    } catch (e) {
      throw e;
    }
    dtoOut.uuAppErrorMap = uuAppErrorMap
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
    let joke = await this.dao.get(awid, dtoIn.id);
    let ratings = joke.ratings
    delete joke.ratings
    let averageRating = 0;
    let ratingSum = 0;
    let totalRatings = ratings.length;
    ratings.forEach(rating => {
      ratingSum = ratingSum + rating.rating;
      });
    averageRating = ratingSum/totalRatings;
    joke.averageRating= averageRating
    joke.totalRatings = totalRatings

    joke.uuAppErrorMap = uuAppErrorMap
    return joke

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
