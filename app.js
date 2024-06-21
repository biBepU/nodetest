const express = require('express')

let morgan = require('morgan')

const app = express();
app.set('views', './views')
app.set('view engine', 'ejs')

app.use(morgan('dev'));

app.use(express.static('public'))

app.get('/',(req,res)=>{
  let blogs = [
    {title:'blog title 1',intro:'this is the blog intro 1'},
    {title:'blog title 2',intro:'this is the blog intro 2'},
    {title:'blog title 2',intro:'this is the blog intro 2'}
  ]
  res.render('home',
    {
      blogs,
      title : "Home"
    }
  )
});
app.get('/about',(req,res)=>{
    res.render('about',
        {title : "About"}
    )
  
  });
  app.get('/about-us',(req,res)=>{
    res.redirect('/about',
      {title : "About"}
    );
  
  });
  app.get('/contact',(req,res)=>{
    res.render('contact',
      {title : "Contact"}
    )
  
  })
  app.use((req,res)=>{
    res.status(404).render('404',
      {title : "404 Not Found"}
    )
  
  })


app.listen(3000)