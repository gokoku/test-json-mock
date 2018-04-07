const express = require('express')
const PORT = process.env.PORT || 5000

express()
  .get('/', (req, res) => res.send('json mock for test'))
  .get('/comments', (req, res) =>
    res.send(
      '[{"id":"0","comment":"I love you."},{"id":"1","comment":"You are my love."},{"id":"2","comment":"I will be with you forever."},{"id":"3","comment":"Nothing\'s gonna change my love for you."},{"id":"4","comment":"Go fuck yourself!"}]'
    )
  )
  .post('/comment', (req, res) =>
    res.send(
      '[{"id":"0","comment":"I love you."},{"id":"1","comment":"You are my love."},{"id":"2","comment":"I will be with you forever."},{"id":"3","comment":"Nothing\'s gonna change my love for you."},{"id":"4","comment":"Go fuck yourself!"}]'
    )
  )
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
