"use strict";

const UuAppUseCaseError = require("./uu-app-use-case-error.js");
const JOKE_ERROR_PREFIX = `${UuAppUseCaseError.ERROR_PREFIX}joke/`;

const Create = {
  UC_CODE: `${JOKE_ERROR_PREFIX}create/`,
  InvalidDtoIn: class extends UuAppUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const List = {
  UC_CODE: `${JOKE_ERROR_PREFIX}list/`,
  InvalidDtoIn: class extends UuAppUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const Get = {
  UC_CODE: `${JOKE_ERROR_PREFIX}get/`,
  InvalidDtoIn: class extends UuAppUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const Delete = {
  UC_CODE: `${JOKE_ERROR_PREFIX}delete/`,
  InvalidDtoIn: class extends UuAppUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const Category = {
  UC_CODE: `${JOKE_ERROR_PREFIX}category/`,
  InvalidDtoIn: class extends UuAppUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Category.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const Getcategory = {
  UC_CODE: `${JOKE_ERROR_PREFIX}getcategory/`,
  InvalidDtoIn: class extends UuAppUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Getcategoryategory.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const Listcategory = {
  UC_CODE: `${JOKE_ERROR_PREFIX}listcategory/`,
  InvalidDtoIn: class extends UuAppUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Listcategory.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const Createcategory = {
  UC_CODE: `${JOKE_ERROR_PREFIX}createcategory/`,
  InvalidDtoIn: class extends UuAppUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Createcategory.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const Deletecategory = {
  UC_CODE: `${JOKE_ERROR_PREFIX}deletecategory/`,
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
  Category,
  Delete,
  Get,
  List,
  Create
};
