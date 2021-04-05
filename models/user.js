const mongoose = require("../database");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: mongoose.SchemaTypes.String },
  displayName: { type: mongoose.SchemaTypes.String },
  password: { type: mongoose.SchemaTypes.String },
});

const collectionName = "user";

const User = mongoose.model(collectionName, userSchema, collectionName);

module.exports = {
  User,
};
