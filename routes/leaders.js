const express = require('express');
const router = express.Router();

router.get('/', function(req,res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send([
            {
                "id": 0,
                "name": "Maria Eduarda",
                "image": "images/chef4.png",
                "designation": "Chief Officer",
                "abbr": "CO",
                "featured": false,
                "description": "Our CEO, Maria Eduarda, credits his hardworking African immigrant parents who undertook the arduous journey to the shores of Brazil with the intention of giving their children the best future."
            },
            {
                "id": 1,
                "name": "Lucas Rodrigues",
                "image": "images/chef2.png",
                "designation": "Chief Food Officer",
                "abbr": "CFO",
                "featured": false,
                "description": "Our CFO, Luquinhas, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"
            },
            {
                "id": 2,
                "name": "Alex Atala",
                "image": "images/chef.png",
                "designation": "Chief Taste Officer",
                "abbr": "CTO",
                "featured": false,
                "description": "Blessed with the most discerning gustatory sense, Alex, our CFO, personally ensures that every dish that we serve meets his exacting tastes."
            },
            {
                "id": 3,
                "name": "João da Silva",
                "image": "images/chef1.png",
                "designation": "Executive Chef",
                "abbr": "EC",
                "featured": true,
                "description": "Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating spectacular brazillian food."
            },
            {
                "id": 4,
                "name": "Mário",
                "image": "images/chef3.png",
                "designation": "Chef Assistant",
                "abbr": "EC",
                "featured": false,
                "description": "Specialized at food from Brazil, Mária does his best at the Tupiniquim Restaurant."
            }
        ]
    );
});

module.exports = router;