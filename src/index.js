const express=require(('express'));
const router=require('./routers/routes');
require('./db/conn');
const MensRanking=require('./models/mens');
const app=express();

const PORT=3000;
app.use(express.json());
app.use(router);



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})