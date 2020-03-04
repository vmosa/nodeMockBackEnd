var express = require('express');
var router = express.Router();
router.use(express.json());


var countries = [{
    id: 1,
    country: 'Greece',
    continent: 'Europe',
    code: 'GRE'
},
{
    id: 2,
    country: 'Italy',
    continent: 'Europe',
    code: 'ITA'
}];

router.get('/:id', (req, res)=> {
    var country = countries.filter((c)=>{return c.id == req.params.id;});
    res.send(country.length>0? country[0]: null);

} );
router.get('/', (req, res)=> {
    res.send(countries);

});
router.post('/', (req, res) => {
    countries.push(req.body);
    res.send(countries);
});
module.exports = router;