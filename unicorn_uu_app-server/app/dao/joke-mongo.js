"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class JokeMongo extends UuObjectDao {

  async createSchema(){
    await super.createIndex({ awid: 1, _id: 1 }, { unique: true });
  }
  async create(uuObject) {
    return await super.insertOne(uuObject);
  }
  async get(awid, id) {
    let filter = {
      awid: awid, id: id
    }
    return await super.findOne(filter);
  }
  async list() {
    return await super.find({
    },{},null);
  }
  async setRating() {
    let filter = {
      awid: awid, id: id
    }
    return await super.findOne(filter);
  }
  async delete(awid, id) {
    let filter =  {
      awid: awid, id: id
    }
    return await super.deleteOne(filter);
  }
  async listByCategory(categoryId) {
    return await super.find({
      categoryId:categoryId
    },{},null);
  }
}
module.exports = JokeMongo;
