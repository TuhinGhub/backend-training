
console.log('here1');
const express=require('express');
console.log('here2');
const {signup}=require('../controllers/userController');
console.log('here3');
const app = express();
const router=new express.Router();
app.use(express.json());
app.use(router);
const PORT = 5000;

console.log('here4');
const routerControl=()=>{
    console.log('here5');

router.post('/signup',signup);




}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

module.exports={routerControl};
