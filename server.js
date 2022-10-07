const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()
//set view engine
app.set('view engine', 'ejs')
//make app use router
app.use('articles', articleRouter)

app.get('/', (req, res) => {
  const articles = [
    {
      title: 'Lorem ipsum',
      createdAt: new Date(),
      description: 'Test description'
    },
    {
      title: 'Lorem ipsum 1',
      createdAt: new Date(),
      description: 'Test description'
    }

  ]
  res.render('articles/index.ejs', { articles: articles })
})
app.listen(6000)
