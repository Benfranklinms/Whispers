import mongoose, { connect } from "mongoose";

const connectToDB = async () => {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log("Connected to database");
    });
}

export default connectToDB;