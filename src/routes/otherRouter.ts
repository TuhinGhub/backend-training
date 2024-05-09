

import express from "express";
import createError from "http-errors";
const { validateControl, promise } = require("../controllers");
const router = express.Router();
import { error } from "console";
import{Request,Response,NextFunction} from "express";

router.get("/", (req:Request,res:Response,next:NextFunction) => {
  try {
    throw new Error("Not Found");
  } catch (err) {
    {
     if(err instanceof Error)
     error.status = 404;
    }
    next(err);
  }
});
router.get("/protected-route", (req:Request, res:Response, next:NextFunction) => {
  if (!req.user) {
    next(createError(401, "Unauthorized"));
  } else {
    res.send(req.body.user);
  }
});

router.post("/api/resource", (req:Request,res:Response, next:NextFunction) => {
  if (!req.body.name) {
    next(createError(400, "Bad Request: Name is required"));
  } else {
    res.send(req.body.name);
  }
});

router.get("/async", promise);
router.post("/validate",validateControl);

module.exports = router;
