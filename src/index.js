const express = require('express');
const userRouter = require('./routes/userRoutes'); 
const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/api', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
