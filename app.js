// Express 모듈을 가져옵니다.
const express = require('express');
const app = express();
const swagRouter = require('./routes/swag')

app.use(express.json());
app.use('/swag',swagRouter);


// 서버가 포트 3000에서 요청을 대기합니다.
app.listen(3000, () => {
  console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});
