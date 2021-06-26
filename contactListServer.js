const express = require('express');
const app = express();
const path = require('path');
//contact list app

const port = 8000;
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));//goes to this folder when an html pg is reqd
app.use(express.urlencoded()); //use=>middleware; parser(a middleware) i
app.use(express.static('assets')); //assets - static files location

var contactList = [
  {
      name: "Prabha",
      phone: "123456789"
  },
  {
      name: "Alex",
      phone: "1111222233"
  },
  {
      name: "Anju",
      phone: "9999222233"
  }
]

app.get('/contactApp',function(req,res) //controller -> home.ejs
{
    // console.log(req);
    // console.log(__dirname)
    // res.send('<h1>Cool it is running</h1>');
    
    return res.render('home',{
        contact_list : contactList
    });
});


app.post('/create-contact',function(req,res)
{
 
    contactList.push(
        {
            name : req.body.name,
            phone : req.body.phone
        }
    );
    return res.redirect('back');
});


// app.get('/stock', function(req, res) {

//     res.send('hello from api2');
//   });


// app.listen(8000);

app.listen(port, function() {
    console.log(`Contact List Server is listening on ${port}!`)
  })