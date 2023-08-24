var Product =require('../models/product');
var mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/Shopify");

var products = [
    new Product({ imagePath : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSroisKW9_EFYmckAlZO0B8tYwcT7g7Vzq1Eg&usqp=CAU',
                    title:'Lehanga',
                    description:'Georget Cloth with Embroidary Design',
                    price: 1200
                }),
                new Product({ imagePath : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSroisKW9_EFYmckAlZO0B8tYwcT7g7Vzq1Eg&usqp=CAU',
                    title:'Lehanga',
                    description:'Georget Cloth with Embroidary Design',
                    price: 1200
                }),
                new Product({ imagePath : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSroisKW9_EFYmckAlZO0B8tYwcT7g7Vzq1Eg&usqp=CAU',
                    title:'Lehanga',
                    description:'Georget Cloth with Embroidary Design',
                    price: 1200
                }),
                new Product({ imagePath : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSroisKW9_EFYmckAlZO0B8tYwcT7g7Vzq1Eg&usqp=CAU',
                    title:'Lehanga',
                    description:'Georget Cloth with Embroidary Design',
                    price: 1200
                })
]
var done=0;
for(var i=0; i<products.length; i++) 
{
    products[i].save().then(function(err, rez)
    {
        done++;
        if(done == products.length) 
        {
            exit();
        }
    })
    function exit()
    {
        mongoose.disconnect();
    }
}