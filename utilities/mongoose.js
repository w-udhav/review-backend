const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const con = mongoose.connect(process.MONGO_DB_URL, {
      dbName: "main",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const connection = mongoose.connection;
    connection.on("connected", () => {
      mongoose.set("useFindAndModify", false);
      console.log(`MongoDB connected : host => ${connection.host}`);
    });

    connection.on("disconnected", () => {
      console.log(`MongoDB disconnected : host => ${connection.host} `);
    });
  } catch (error) {
    console.log("Error : ", error);
  }
};
