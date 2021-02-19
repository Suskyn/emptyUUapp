"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class CategoryMongo extends UuObjectDao {

  async createSchema(){
    await super.createIndex({ awid: 1, _id: 1 }, { unique: true });
  }
  async category(awid, id) {
    let filter = {
      awid: awid, id: id
    }
    return await super.find(filter);
  }
  async createcategory(uuObject) {
    return await super.insertOne(uuObject);
  }
  async getcategory(awid, id) {
    let filter = {
      awid: awid, id: id
    }
    return await super.findOne(filter);
  }
  async listcategory() {
    return await super.find({
    },{},null);
  }
  async deletecategory(awid, id) {
    let filter =  {
      awid: awid, id: id
    }
    return await super.deleteOne(filter);
  }

}
module.exports = CategoryMongo;
