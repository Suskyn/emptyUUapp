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
  async setRating(uuObject) {
    let filter = {
     awid: uuObject.awid,
     id: uuObject.id
    }
    return await super.findOneAndUpdate(filter, uuObject, "NONE");
  }
  async delete(awid, id) {
    let filter =  {
      awid: awid, id: id
    }
    return await super.deleteOne(filter);
  }
  async listByCategory(awid ,categoryId) {
    return await super.find({
      category:categoryId,
      awid: awid
    },{},null);
  }
}
module.exports = JokeMongo;
