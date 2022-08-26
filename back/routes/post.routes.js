const router = require("express").Router();
const postController = require("../controllers/post.controller");
const multer = require("../middleware/upload.post");

//ajouté le midlleware auth plus tard
//post
router.get("/", postController.readPost);
router.get("/user-posts/", postController.readUserPosts);
router.post("/", multer, postController.createPost);
router.put("/:id", multer, postController.updatePost);
router.delete("/:id", postController.deletePost);
router.get("/delete-user-post", postController.deleteUserPost);
router.patch("/like-post/:id", postController.likePost);
router.patch("/unlike-post/:id", postController.unlikePost);

//comments

router.patch("/comment-post/:id", postController.commentPost);
router.patch("/edit-comment-post/:id", postController.editCommentPost);
router.patch("/delete-comment-post/:id", postController.deleteCommentPost);

module.exports = router;
