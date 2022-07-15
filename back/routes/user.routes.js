const router = require("express").Router();
const userController = require("../controllers/user.controller");
const multer = require("../middleware/update-user-picture");
//auth
router.post("/register", userController.signup);
router.post("/login", userController.login);

//user
router.get("/", userController.getAllUsers);
router.get("/:id", userController.userInfo);
router.put("/:id", multer, userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.patch("/follow/:id", userController.follow);
router.patch("/unfollow/:id", userController.unfollow);

module.exports = router;
