import { Router } from "express"
import * as userController from "./user.controller"

const router = Router()

router.get("/", userController.getUsers)
router.post("/", userController.createUser)
router.delete("/:id", userController.deleteUser)
router.patch("/:id", userController.updateUser)

export default router