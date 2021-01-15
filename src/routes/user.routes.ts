import { Router } from "express";
import { createUsers, getOneUser, getUsers, updateUser, deleteOneUser } from "../controllers/user.controller";

const router = Router();

router.get("/users", getUsers);
router.post("/users", createUsers);
router.get('/users/:id', getOneUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteOneUser);






export default router;
