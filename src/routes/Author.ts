import express from "express";
import controller from "../controllers/Author";

const router = express.Router();

router.post("/create", controller.createAuthor);
router.get("/get/:authorId", controller.readAuthor);
router.get("/get/", controller.readAll);
router.patch("/update/:authorId", controller.updateAuthor);
router.delete("/delete/:authorId", controller.deleteAuthor);

export = router;
