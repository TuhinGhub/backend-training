const express = require("express");
const userRouter = require("./routes/userRoutes");
const connection = require("./config/Database"); 
const app = express();
const PORT = 5000;


app.use(express.json());

app.use("/api", userRouter);

connection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Connection failed with DB:", err.message);
    
  });
