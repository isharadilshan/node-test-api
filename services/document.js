const { Document } = require("../models/document");

module.exports = class DocumentService {
  async createDocument(data) {
    const {
      id,
      sender,
      recipent,
      from,
      to,
      channel,
      documentState,
      reference,
      description,
    } = data;

    const new_document = new Document({
      id,
      sender,
      recipent,
      from,
      to,
      channel,
      documentState,
      reference,
      description,
    });

    const response = await new_document.save();
    const res = response.toJSON();
    delete res.__v;
    return res;
  }

  async getAllDocuments(data) {
    const { ownedBy, documentStatus } = data;
    return Document.find({
      "documentState.owner.name": ownedBy,
      "documentState.documentStatus": documentStatus,
    });
  }

  async getDocument(_id) {
    return Document.findById(_id);
  }

  async updateDocuments(data) {
    const { ownedBy, ids } = data;
    const arr = ids.split(",");
    return Document.updateMany(
      {
        _id: {
          $in: arr,
        },
      },
      {
        "documentState.owner": ownedBy,
        "documentState.documentStatus": "SIGNED",
      },
      {
        new: true,
        omitUndefined: true,
        fields: "-__v -createdAt -updatedAt",
      }
    );
  }
};
