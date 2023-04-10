var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi Pilin",
    user: "Catatola",
    date: new Date()

  },
  {
    text: "Tenho drip",
    user: "Zézão",
    date: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages  })
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: "Add a message"})
});

router.post('/new', function(req, res, next) {
  let newMessage = {
    text: req.body.message,
    user: req.body.author,
    date: new Date()
  }
  messages.push(newMessage)
  res.redirect('/')
})

module.exports = router;
