const express = require('express')
const PORT = process.env.PORT || 5000
var app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Cache-Control,access_token');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

/**
 \* OPTIONSメソッドの実装
 \*/
app.options('*', function (req, res) {
  res.sendStatus(200);
});


app
  .get('/', (req, res) => res.send('json mock for test'))
  .get('/comments', (req, res) => {
    res.json(
      [
        {id: '0', comment: 'I love you.'},
        {id: '1', comment: 'You are great.'},
        {id: '3', comment: 'It\'s a great sounds'},
        {id: '4', comment: 'How marvelous'}
      ]
    )
  })
  .post('/comments', (req, res) =>
    res.json(
      [
        {id: '0', comment: 'I love you.'},
        {id: '1', comment: 'You are great.'},
        {id: '3', comment: 'It\'s a great sounds'},
        {id: '4', comment: 'How marvelous'}
      ]
    )
  )
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
