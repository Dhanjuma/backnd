
const express = require('express');
// const req = require('express/lib/request');
// const res = require('express/lib/response');
const path = require('path')
const app = express();

// try {
//     res.sendFile(path.join(__dirname, 'public', 'homepage.html'));
// }catch(error) {
//     if(err.code == 'ENOENT'){
//         res.sendFile(path.join(__dirname, 'public', 'not_found.html'));
// }}
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
    res.sendFile('public/homepage.html',{root:__dirname})
});
app.get('/about',(req,res)=>{
    res.sendFile('public/about.html',{root:__dirname});
});
app.get('/contact',(req,res)=>{
    res.sendFile('public/contact.html',{root:__dirname})
});
app.get('/services',(req,res)=>{
    res.sendFile('public/services.html',{root:__dirname})
});
// app.use('/not_found',(req,res)=>{
//     res.sendFile('public/not_found.html',{root:__dirname})
// });
app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/not_found.html'))
})
const PORT = process.env.PORT || 4000;
app.listen(PORT,() => console.log(`server started on port${PORT}`));
