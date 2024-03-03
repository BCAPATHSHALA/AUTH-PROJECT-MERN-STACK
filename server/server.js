import app from "./app.js";
import { connectDB } from "./config/database.js";

// Calling the database
connectDB();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is working on:::::::::::: http://localhost:${PORT}`);
});
