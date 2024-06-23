const express = require('express')


let morgan = require('morgan')
const mongoose = require('mongoose')

const Blog = require('./models/Blogs');

const expressLayouts = require('express-ejs-layouts');

const app = express();
const blogroute = require('./route/blogroute')

app.use(express.urlencoded({extended:true}))

let mongoUrl ='mongodb+srv://zerofillsg:Htet+Eiwai@htetmyat.6ifhafs.mongodb.net/?retryWrites=true&w=majority&appName=htetmyat'

mongoose.connect(mongoUrl).then(()=>{
  console.log('connect to db')
  app.listen(3000,()=>{
    console.log('app is running on local host 3000')
  })
}).catch(e=>
  console.log(e)
)

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(expressLayouts);
app.set('layout', 'layouts/default');

app.use(morgan('dev'));


app.use(express.static('public'))

app.get('/add-blogs',async(req,res)=>{
  let blog = new Blog({
    title : "blog title 3",
    intro : "blog intro 3",
    body : "blog body 3"
  });
  await blog.save();
  res.send("blog saved")

})



app.get('/',async(req,res)=>{
res.redirect('/blogs')
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

}); 

  app.use('/blogs',blogroute);

  app.use((req,res)=>{
    res.status(404).render('404',
      {title : "404 Not Found"}
    )
  
  })


