const express = require('express')

const app = express();
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
  let blogs = [
    {title:'blog title 1',intro:'this is the blog intro 1'},
    {title:'blog title 2',intro:'this is the blog intro 2'},
    {title:'blog title 2',intro:'this is the blog intro 2'}
  ]
  res.render('home',
    {
      blogs
    }
  )
ejs
});
app.get('/about',(req,res)=>{
    res.render('about')
  
  });
  app.get('/about-us',(req,res)=>{
    res.redirect('/about');
  
  });
  app.get('/contact',(req,res)=>{
    res.render('contact')
  
  })
  app.use((req,res)=>{
    res.status(404).render('404')
  
  })


app.listen(3000)