const router = require("express").Router();
const asyncWrapper = require("../utilities/async-wrapper");
const DocumentService = require("../services/document");
const documentService = new DocumentService();

router.get(
  "/",
  asyncWrapper(async (req, res) => {
    res.send({
      message: "Hello World!",
      status: 200,
    });
  })
);

router.post(
  "/document",
  asyncWrapper(async (req, res) => {
    const response = await documentService.createDocument(req.body);
    res.send(response);
  })
);

module.exports = router;
