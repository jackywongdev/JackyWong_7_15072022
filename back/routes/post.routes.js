const router = require("express").Router();
const postController = require("../controllers/post.controller");
const auth = require("../middleware/auth");
const multer = require("../middleware/upload.post");

//ajouté le midlleware auth plus tard
//post
router.get("/", postController.readPost);
router.post("/", auth, multer, postController.createPost);
router.put("/:id", auth, multer, postController.updatePost);
router.delete("/:id", auth, postController.deletePost);
router.patch("/like-post/:id", auth, postController.likePost);
router.patch("/unlike-post/:id", auth, postController.unlikePost);

//comments

router.patch("/comment-post/:id", auth, postController.commentPost);
router.patch("/edit-comment-post/:id", auth, postController.editCommentPost);
router.patch(
  "/delete-comment-post/:id",
  auth,
  postController.deleteCommentPost
);

module.exports = router;
