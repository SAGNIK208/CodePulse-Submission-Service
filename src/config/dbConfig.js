const mongoose = require("mongoose");
const { ATLAS_DB_URL, NODE_ENV } = require("./serverConfig");

async function connectToDB() {
  try {
    if (NODE_ENV == "dev") {
      await mongoose.connect(ATLAS_DB_URL);
      console.log("Mongodb connected");
    }
  } catch (error) {
    console.log("Unable To connect to DB");
    console.error(error);
  }
}

module.exports = connectToDB;
