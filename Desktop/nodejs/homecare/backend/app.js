const express = require('express')
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const bodyparser = require('body-parser');

// mongoose.connect('mongodb+srv://khalifa:meekkid20@cluster0-4x6cv.mongodb.net/test?retryWrites=true&w=majority', 
//                   {useNewUrlParser: true} ,  ()=> console.log('connect to db'));
const PORT = process.env.PORT || 5000;

var app = express();

app.use(cors())

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyparser.json());

app.use(passport.initialize())

app.use(passport.session())

app.get('/', (req, res)=>{
    res.send('hello world, i am available')
})


const users = require('./route/users')
app.use('/api', users)


app.listen(PORT, () => console.log(`Server has started.`));