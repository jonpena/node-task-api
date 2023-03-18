import "dotenv/config";

import { connect } from "mongoose";

async function dbConnect() {
  try {
    const DB_URI = <string>process.env.DB_URI;
    console.log(DB_URI);
    await connect(DB_URI);
    console.log("Successful Connection with Database");
  } catch (error) {
    console.log("No Connect with the Database");
  }
}

export default dbConnect;
