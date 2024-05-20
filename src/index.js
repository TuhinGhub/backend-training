const express = require('express');
const userRouter = require('./routes/userRoutes'); // Correct the path to the userRouter file
const app = express();
const PORT = 5000;

app.use(express.json()); // Use JSON middleware globally for the app

app.use('/api', userRouter); // Use the router with a base path

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
