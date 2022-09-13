const router = require("express").Router();
const postController = require("../controllers/post.controller");
const multer = require("../middleware/upload.post");

//post
router.get("/", postController.readPost);
router.post("/", multer, postController.createPost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);
router.delete("/delete-user-posts/:id", postController.deleteUserPosts);
router.patch("/like-post/:id", postController.likePost);
router.patch("/unlike-post/:id", postController.unlikePost);

//comments

router.patch("/comment-post/:id", postController.commentPost);
router.patch("/edit-comment-post/:id", postController.editCommentPost);
router.patch("/delete-comment-post/:id", postController.deleteCommentPost);
router.patch("/delete-user-comments/:id", postController.deleteUserComments);

module.exports = router;
