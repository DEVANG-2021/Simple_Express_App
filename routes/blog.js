const express = require('express');
const router= express.Router();
const path = require('path');
const blogs = require('../data/blogs.js')

router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../static/index.html'));
    res.render('app')
})

router.get('/home',(req,res)=>{
   res.render('home')
})
router.get('/blogs',(req,res)=>{
    res.render('blogpage',{
        blogs:blogs
    })
})

router.get('/blogpage/:slug',(req,res)=>{
  
    myblog = blogs.filter((e)=>{
     return e.slug == req.params.slug
    })
    res.render('blogpost',{
        title : myblog[0].title,
        content : myblog[0].content,
        slug : myblog[0].slug
    })

})

router.get('/bloghome',(req,res)=>{
    blogs.forEach(e => {
        console.log(e.title);
    });
    res.sendFile(path.join(__dirname,'../static/blog.html'));
})

module.exports = router;