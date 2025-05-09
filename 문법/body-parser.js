const express = require('express');

const port = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/submit', (req, res)=> {
  const {name, year} = req.body;
  res.send(`Name : ${name}, Year: ${year}`); 
});

app.listen(port,()=>{
  console.log('서버가 http://localhost:3001 에서 실행중입니다.');
})