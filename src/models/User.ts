import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		lowercase: true,
	},
});

export default mongoose.model("User", userSchema);
