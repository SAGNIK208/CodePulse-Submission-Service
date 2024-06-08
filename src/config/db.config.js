const mongoose = require("mongoose");
const {ATLAS_DB_URL,NODE_ENV} = require("./server.config");


async function connectToDB(){
    try {
        if(NODE_ENV == 'dev'){
            await mongoose.connect(ATLAS_DB_URL);
        }
    } catch (error) {
        console.log("Unable To connect to DB");
        console.error(error);
    }
}

