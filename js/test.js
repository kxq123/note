var json = {
    "name": "kk",
    "age ": "19",
    "books": [
        {
            "name": "senior chinese",
            "price": 12,
            "author": {
                "name": "张o",
                "adress": "hebei wuhan ",
                "phone": "123456789 ",
                "books": [
                    {
                        "name": "book1",
                        "price": 78
                    },
                    {
                        "name": "book2",
                        "price": 56
                    },
                    {
                        "name": "book3",
                        "price": 45
                    }
                ]
            }
            
        },
        {
            "name": "yhy",
            "price": 19,
            "author": {
                "name": "张k",
                "adress": "hebei kj ",
                "phone": "123456789 ",
                "books": [
                    {
                        "name": "bkkk1",
                        "price": 978
                    }
                ]
            }
            
        },
        {
            "name": "uyy",
            "price": 82,
            "author": {
                "name": "张l",
                "adress": "hebei kf ",
                "phone": "123456789 ",
                "books": [
                    {
                        "name": "kkkf",
                        "price": 708
                    },
                    {
                        "name": "book2",
                        "price": 566
                    }
                ]
            }
            
        }
    ]
}
console.log(json.name)
console.log(json.books[0].name)
console.log(json.books[1].name)
console.log(json.books[2].name)
console.log(json.books.length)
for(var a=0 ; a<3 ; a++)
{
    console.log(books[a].name)
    
}
