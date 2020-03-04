var express = require('express');
var router = express.Router();
router.use(express.json());
var http = require('http');



var destinations = [{
    id: 1,
    city: 'Athens',
    countryId: 1
},
{
    id: 2,
    city: 'Rome',
    countryId: 2
}];

router.get('/[A-Za-z]+', (req, res)=>{
    console.log('no match');
    res.status(404).send({errorMessage: 'The page does not exist', data:{}});
});
router.get('/:id', (req, res)=> {
    var destination = destinations.filter((c)=>{return c.id == req.params.id;});
    res.send(destination.length>0? destination[0]: null);

} );


router.get('/', (req, res)=> {
    res.send(destinations);

});
router.post('/', (req, res) => {
    destinations.push(req.body);
    res.send(destinations);
});
router.put('/:id', (req, res) => {
    destinations.map((d)=>{
        if (d.id==req.params.id){

            d.city = req.body.city;
            d.countryId = req.body.countryId;
        }
    });
    res.send(destinations);
});
module.exports = router;