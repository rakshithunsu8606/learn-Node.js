const mongoose = require("mongoose");

const ConnectionMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
            .then(() => console.log("MongoDB Conection Sucessfully"))
            .catch((error) => console.log("MongoDB Conection error" + error));
    } catch (error) {
        console.log("MongoDB Conection error" + error)
    }
}

module.exports = ConnectionMongoDB;