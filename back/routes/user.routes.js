const router = require("express").Router();
const userController = require("../controllers/user.controller");
const multer = require("../middleware/update-user-picture");
const authController = require("../controllers/auth.controller");
const auth = require("../middleware/auth.middleware");
//auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);
//user
router.get("/", userController.getAllUsers);
router.get("/:id", userController.userInfo);
router.put("/:id", multer, userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.patch("/follow/:id", userController.follow);
router.patch("/unfollow/:id", userController.unfollow);

module.exports = router;
