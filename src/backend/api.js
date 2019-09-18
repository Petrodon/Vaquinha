var express = require('express')
var app = express()

cards = [
  { id: 0, ve: 3, tdoa: 5, term: 40, tot: 90, por: 33, at: 30, payinfo: {email: 'palh@ajuda12345.com', return: '', cancel: '', notify: ''}, title: 'Palhaços para Ajudar Doentes', desc: '', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Palha%C3%A7os_da_Ong.jpg', plans: [{id: 0, title: 'Standard', desc: 'Sincera gratidão', val: 5}, {id: 1, title: 'Premium', desc: 'Standard + camiseta', val: 15}], tags: { tipo: 'Social', local: 'São Paulo - SP' } },
  { id: 1, ve: 20, tdoa: 12, term: 100, tot: 200, por: 50, at: 100, payinfo: {email: 'palh@ajuda12345.com', return: '', cancel: '', notify: ''}, title: 'Salvando Cachorros', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Sad-pug.jpg', plans: [{id: 0, title: 'Standard', desc: 'Sincera gratidão', val: 5}, {id: 1, title: 'Premium', desc: 'Standard + camiseta', val: 15}], tags: { tipo: 'Animais', local: 'Rio de Janeiro - RJ' } },
  { id: 2, ve: 10, tdoa: 70, term: 20, tot: 50, por: 10, at: 5, payinfo: {email: 'palh@ajuda12345.com', return: '', cancel: '', notify: ''}, title: 'Ajude um brasileiro ir para Harvard', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Harvard_University_Widener_Library.jpg/800px-Harvard_University_Widener_Library.jpg', plans: [{id: 0, title: 'Standard', desc: 'Sincera gratidão', val: 5}, {id: 1, title: 'Premium', desc: 'Standard + camiseta', val: 15}], tags: { tipo: 'Educacional', local: 'Porto Alegre - SC' } },
]

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next();
});

app.get('/api', function (req, res) {
  res.send()
})

app.get('/api/:id', function (req, res) {
  res.send(cards[req.params.id])
})

app.listen(3000, function () {
  console.log('http://localhost:3000')
})
