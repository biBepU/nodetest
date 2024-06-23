const express = require('express');
const Blog = require('../models/Blogs');
const router = express.Router()
const BlogController = require('../controller/blogController')
router.get('',BlogController.index);
  
router.post('',BlogController.store);
  
  
  
  
    router.get('/create',BlogController.create);
  
    router.get('/:id',BlogController.show);
    router.post('/:id/delete',BlogController.destroy);


    module.exports = router; 