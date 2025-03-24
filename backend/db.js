const mongoose = require("mongoose");
require('dotenv').config();
 exports.Database= function Database() {
    mongoose.set('strictQuery', false);
    mongoose
      .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })


      .then(() => {
        console.log("DB Connetion Successfull");
      })
      .catch((err) => {
        console.log(err.message);
      });
}
 