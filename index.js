const express = require('express')
const PORT = process.env.PORT || 5000

express()
  .get('/', (req, res) => res.send('json mock for test'))
  .get('/comments', (req, res) =>
    res.json(
      [
        {id: '0', comment: 'I love you.'},
        {id: '1', comment: 'You are great.'},
        {id: '3', comment: 'It\'s a great sounds'},
        {id: '4', comment: 'How marvelous'}
      ]
    )
  )
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
