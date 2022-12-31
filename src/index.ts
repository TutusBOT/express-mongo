import express from "express";
import mongoose from "mongoose";
import User from "./models/User";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/test");

const db = mongoose.connection;
db.on("error", (err) => console.error(err));
db.on("open", () => console.log("Connected to database"));

app.get("/", (req, res) => {
	res.send("Hello world");
});

app.listen(process.env.PORT || 8080, () => {
	console.log(`Listening on port ${process.env.PORT || 8080}`);
});

export default app;
