const express = require('express');
const router = express.Router();

//Returns all the dishes
/*router.get('/', async (req,res) => {
    try{
        const dishes = await Dish.find();
        res.json(dishes);
    }catch (e) {
        res.json({message: e})
    }
});*/

router.get('/', function(req,res) {
    res.setHeader('Access-Control-Allow-Origin', 'https://reactrestaurant-backend.herokuapp.com');
    res.send([
            {
                "id": 0,
                "name": "Feijoada",
                "image": "images/feijoada.png",
                "category": "mains",
                "label": "Hot",
                "price": "49.99",
                "featured": true,
                "description": "A stew of beans with beef and pork. In Brazil, it is usually made with black beans (feijoada à brasileira), where it is also considered a national dish. It is usually served with rice, assorted sausages and farofa"
            },
            {
                "id": 1,
                "name": "Acarajé",
                "image": "images/acaraje.png",
                "category": "appetizer",
                "label": "",
                "price": "1.99",
                "featured": false,
                "description": "Made with black-eyed peas, garlic, ginger and salt, then deep fried in dende - a reddish oil from the palm fruit."
            },
            {
                "id": 2,
                "name": "Coxinha",
                "image": "images/coxinha.png",
                "category": "appetizer",
                "label": "New",
                "price": "1.99",
                "featured": false,
                "description": "A popular food in Brazil consisting of chopped or shredded chicken meat, covered in dough, molded into a shape resembling a teardrop, battered and fried."
            },
            {
                "id": 3,
                "name": "Brigadeiro",
                "image": "images/brigadeiro.png",
                "category": "dessert",
                "label": "",
                "price": "2.99",
                "featured": false,
                "description": "The brigadeiro is a traditional Brazilian dessert. It is made of condensed milk, cocoa powder, butter, and chocolate sprinkles covering the outside layer."
            }
        ]
    );
});


/*router.post('/', async (req, res) =>{
    const post = new Dish({
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        label: req.body.label,
        price: req.body.price,
        featured: req.body.featured,
        description: req.body.description
    });

    try{
        const savedDish = await post.save();
        res.json(savedDish);
    }catch (e) {
        res.json({message: e});
    }

}); */

module.exports = router;