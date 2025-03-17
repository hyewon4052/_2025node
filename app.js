// Express 모듈을 가져옵니다.
const express = require('express');

// Express 애플리케이션을 생성합니다.
const app = express();

// 기본 라우트를 설정합니다.
app.get('/', (req, res) => {
  // 'Hello, World!' 응답을 보냅니다.
  res.send('Hello, World!');
});

// 서버가 포트 3000에서 요청을 대기합니다.
app.listen(3000, () => {
  console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});
