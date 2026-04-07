import "dotenv/config";
import connectDB from "../config/db.js";
import app from "../app.js";

let dbConnected = false;

const ensureDB = async () => {
  if (!dbConnected) {
    await connectDB();
    dbConnected = true;
  }
};

export default async function handler(req, res) {
  await ensureDB();
  return app(req, res);
}
