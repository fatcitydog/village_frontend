const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController");

router
  .route("/")
  .post(postsController.createNewPost)
  .get(postsController.getAllPost)
  

router
.route("/:postID")
.get(postsController.getPostById)
.put(postsController.editPost);

module.exports = router;
