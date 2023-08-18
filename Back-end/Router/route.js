import { Router } from "express";

import * as controller from "../Controllers/appcontroller.js";

const router = Router();

router.route("/register").post(controller.register);

export default router;
