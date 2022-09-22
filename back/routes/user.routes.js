const router = require("express").Router();
const userController = require("../controllers/user.controller");
const multer = require("../middleware/update-user-picture");
const authController = require("../controllers/auth.controller");

//auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);
//user
router.get("/", userController.getUsers);
router.get("/:id", userController.userInfo);
router.put("/upload", multer, userController.updateUserPicture);
router.delete("/:id", userController.deleteUser);

module.exports = router;
