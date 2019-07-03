const mongoose = require('mongoose');

export class MongooseDb {

  public connect() {
    // mongoose.connect('mongodb+srv://erez:Bereshit@cluster0-utea1.mongodb.net/test?retryWrites=true&w=majority', {
    // mongoose.connect('mongodb+srv://erez:user123456@cluster0-utea1.mongodb.net/test?retryWrites=true&w=majority', {
    mongoose.connect('mongodb://localhost:27017/localdb', {
      useNewUrlParser: true,
      useCreateIndex: true
    }).then(() => {
      console.log('connected to database');
    }).catch((e) => {
      console.log('failed connected to database', e);
    });
  }
}
