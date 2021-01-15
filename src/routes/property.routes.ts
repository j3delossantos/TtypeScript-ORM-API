import { Router } from "express";
import { createProperty} from "../controllers/property.controller";

const router = Router();

//router.get("/propertys", getUsers);
router.post("/propertys", createProperty);
/*router.get('/users/:id', getOneUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteOneUser);

*/




export default router;
