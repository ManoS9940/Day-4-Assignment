var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
var objects = "equal";
if(Object.keys(obj1).length==Object.keys(obj2).length)
{
    for( var key in obj1) 
    {
        if(obj1[key] == obj2[key]) 
        {
            continue;
        }
        else {
            objects= "not equal";
            break;}
    }
}
else 
    {
        objects="not equal";
    }
console.log(`OBJECTS are ${objects}`)
