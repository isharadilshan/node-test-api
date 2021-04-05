const mongoose = require("../database");
const Schema = mongoose.Schema;

const documenttSchema = new Schema({
  id: { type: mongoose.SchemaTypes.String },
  sender: {
    name: { type: mongoose.SchemaTypes.String },
  },
  recipent: {
    name: { type: mongoose.SchemaTypes.String },
  },
  from: {
    name: { type: mongoose.SchemaTypes.String },
    address: { type: mongoose.SchemaTypes.String },
    locationType: { type: mongoose.SchemaTypes.String },
  },
  to: {
    name: { type: mongoose.SchemaTypes.String },
    address: { type: mongoose.SchemaTypes.String },
    locationType: { type: mongoose.SchemaTypes.String },
  },
  channel: { type: mongoose.SchemaTypes.String },
  documentState: {
    id: { type: mongoose.SchemaTypes.String },
    owner: {
      name: { type: mongoose.SchemaTypes.String },
    },
    updated: { type: mongoose.SchemaTypes.Number },
    documentStatus: { type: mongoose.SchemaTypes.String },
  },
  reference: { type: mongoose.SchemaTypes.Number },
  description: { type: mongoose.SchemaTypes.String },
});

const collectionName = "document";

const Document = mongoose.model(
  collectionName,
  documenttSchema,
  collectionName
);

module.exports = {
  Document,
};
