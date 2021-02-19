"use strict";

const UuAppUseCaseError = require("./uu-app-use-case-error.js");
const CATEGORY_ERROR_PREFIX = `${UuAppUseCaseError.ERROR_PREFIX}category/`;

const Category = {
  UC_CODE: `${CATEGORY_ERROR_PREFIX}category/`,
  InvalidDtoIn: class extends UuAppUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Category.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const Getcategory = {
  UC_CODE: `${CATEGORY_ERROR_PREFIX}getcategory/`,
  InvalidDtoIn: class extends UuAppUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Getcategory.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const Listcategory = {
  UC_CODE: `${CATEGORY_ERROR_PREFIX}listcategory/`,
  InvalidDtoIn: class extends UuAppUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Listcategory.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const Createcategory = {
  UC_CODE: `${CATEGORY_ERROR_PREFIX}createcategory/`,
  InvalidDtoIn: class extends UuAppUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Createcategory.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const Deletecategory = {
  UC_CODE: `${CATEGORY_ERROR_PREFIX}deletecategory/`,
  InvalidDtoIn: class extends UuAppUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Deletecategory.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

module.exports = {
  Deletecategory,
  Createcategory,
  Listcategory,
  Getcategory,
  Category
};
