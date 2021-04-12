const router = require("express").Router();
const asyncWrapper = require("../utilities/async-wrapper");
const DocumentService = require("../services/document");
const documentService = new DocumentService();
const UserService = require("../services/user");
const userService = new UserService();

router.get(
  "/",
  asyncWrapper(async (req, res) => {
    res.send({
      message: "Hello World!",
      status: 200,
    });
  })
);

// router.post(
//   "/documents",
//   asyncWrapper(async (req, res) => {
//     const response = await documentService.createDocument(req.body);
//     res.send(response);
//   })
// );

router.post(
  "/documents",
  asyncWrapper(async (req, res) => {
    const response = await documentService.updateDocuments(req.body);
    res.send(response);
  })
);

router.get(
  "/documents",
  asyncWrapper(async (req, res) => {
    const response = await documentService.getAllDocuments(req.query);
    res.send(response);
  })
);

router.get(
  "/documents/:id",
  asyncWrapper(async (req, res) => {
    const response = await documentService.getDocument(req.params.id);
    res.send(response);
  })
);

router.post(
  "/users",
  asyncWrapper(async (req, res) => {
    const response = await userService.createUser(req.body);
    res.send(response);
  })
);

router.get(
  "/users",
  asyncWrapper(async (req, res) => {
    const response = await userService.getUser(req.query);
    res.send(response);
  })
);

module.exports = router;
