var express = require('express');
var router = express.Router();
router.use(express.json());
var helpers = require('./helpers');
var search=helpers.searchByCriteria;



var payments= [{
    id: 1,
    amount: 100,
    date: new Date('2019-02-05'),
    customerId: 1
},
{
    id: 2,
    amount: 250,
    date: new Date('2018-05-17'),
    customerId: 2
}];


router.get('/:id', (req,res)=>{ 
    var filtered = payments.filter((p)=>{
        //console.log(p, req.params);
        return search(p, req.params, ["id"]);
    });
    res.send(filtered);
});

router.get('/', (req,res)=>{
    res.send(payments);
});

router.post('/', (req, res)=>{
    var filtered = payments.filter(p=> search(p, req.body, Object.keys(req.body)));
    if (filtered.length>0){
        res.status(406).send({errorMessage: 'Cannot add object! Object already exists.' });
    }
    payments.push(req.body);
    res.send(payments);
});
router.put('/[A-Za-z]*', (req,res)=>{
    res.status(404).send({errorMessage: 'Cannot update unknown resource'});
});
router.put('/:id',(req,res)=>{

    res.send(payments);
});



module.exports = router;