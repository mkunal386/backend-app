import mongoose from "mongoose";
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected DB:", mongoose.connection.name);
  } catch (err) {
    console.log(err);
  }
};
export default dbConnect;

