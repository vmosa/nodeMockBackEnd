function searchByCriteria(obj1, obj2, crit){
    let match=true;
    let areObj = (typeof obj1 === Object) && (typeof obj2 === Object);
    
    if (crit instanceof Array){
        if (crit.length>0){
            crit.forEach((c)=>{
                
                if (match){
                    match = match && obj1[c] == obj2[c];
                }
            });
        }
        else{
            match = false;
        }
    }
    else{
        match = false;   
    }
    return match;
}

module.exports = {searchByCriteria: searchByCriteria};