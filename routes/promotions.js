const express = require('express');
const router = express.Router();

router.get('/', function(req,res) {
    res.setHeader('Access-Control-Allow-Origin', 'https://reactrestaurant-backend.herokuapp.com');
    res.send([
            {
                "id": 0,
                "name": "Weekend Grand Churrascão",
                "image": "images/churrasco.png",
                "label": "New",
                "price": "19.99",
                "featured": true,
                "description": "Featuring mouthwatering combinations with a choice of five different salads, six enticing steaks, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person!"
            }
        ]
    );
});

module.exports = router;