const express = require('express')
const app = express()
const { engine } = require('express-handlebars');
const port = 3000

app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { pageHome: 'bg-dark' })
})
app.get('/about', (req, res) => {
  res.render('about', { pageAbout: 'bg-dark' })
})
app.get('/portfolio', (req, res) => {
  res.render('portfolio', { pagePortfolio: 'bg-dark' })
})
app.get('/contact', (req, res) => {
  res.render('contact', { pageContact: 'bg-dark' })
})

app.listen(port, () => {
  console.log(`port : ${port} is on listening`)
})