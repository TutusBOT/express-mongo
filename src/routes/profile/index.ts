import { requiresAuth } from "express-openid-connect";
import express from "express";

const router = express.Router();

router.get("/", requiresAuth(), (req, res) => {
	res.json({ user: req.oidc.user });
});

export default router;
