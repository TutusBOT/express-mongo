import express from "express";
import mongoose from "mongoose";
import { auth } from "express-openid-connect";
import dotenv from "dotenv";
import { router } from "./routes";

dotenv.config();

const config = {
	authRequired: false,
	auth0Logout: true,
	secret: process.env.SECRET,
	baseURL: process.env.BASEURL,
	clientID: process.env.CLIENTID,
	issuerBaseURL: process.env.ISSUER,
};

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(auth(config));
app.use("/", router);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/test");

const db = mongoose.connection;
db.on("error", (err) => console.error(err));
db.on("open", () => console.log("Connected to database"));

app.listen(process.env.PORT || 8080, () => {
	console.log(`Listening on port ${process.env.PORT || 8080}`);
});

export default app;
