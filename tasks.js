var express = require('express');
var router = express.Router();
router.use(express.json());


var tasks=[
    {
        id: 1, 
        title:'first contact',
        details: {}}, 
    {
        title:'destination choice',
        details: {},
        id: 2
    },
    {
        title:'destination choice',
        details: {},
        id: 3
    }
];
var maxId = tasks.length;
/*app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200/*');
        next();});
*/
router.get('/:id', (req, res) => {
    //var index = tasks.findIndex((t)=> {return t.id == req.body.id;});
    var taskSearchList = tasks.filter((t)=> {return t.id == req.params.id;});
    
    if (taskSearchList.length>0){
        //res.send(tasks[index]);
        res.send(taskSearchList[0]);
    }
    else {
        res.status(404).send('no such task');
        //res.redirect('tasks/');
    }
});

router.get('/', (req, res) => {
    res.send(tasks);
});

router.post('/', (req, res) => {
    var tid=++maxId;
    tasks.push({id: tid, title: req.body.title, details: req.body.details});
});

router.put('/:id', (req, res)=>{
    //console.log(req.body);
    //console.log(req.params);
    tasks.map((c)=>{
        if (c.id==req.params.id){

            c.details=req.body.details;
        }
    });
    res.send(tasks);


});
module.exports = router;