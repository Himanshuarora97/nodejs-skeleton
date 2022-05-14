import express from "express";
import * as userController from "../controllers/user/user.controller";

const router = express.Router();

//= ===============================
// Admin routes
//= ===============================
router.get("/allUsers", userController.allUsers);
router.patch("/deleteUser/:user_id", userController.deleteUser);

module.exports = router;
