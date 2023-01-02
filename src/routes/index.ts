import express from "express";
import profileRouter from "./profile/index";

export const router = express.Router();
router.use("/profile", profileRouter);

router.get("/", (req, res) => {
	res.json({ user: req.oidc.idToken });
});
