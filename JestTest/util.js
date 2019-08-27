/* var sum = function(a,b){
    return a+b;
}

module.exports = {
    sum

} */

var addItemToList = function(list,newItem){
    // list.push(newItem)
    return list.concat([newItem]);
}

var removeItemFromList = function(list,index){
    // list.splice(index,1);
    return list.filter(function(listItem,i){
        return i !== index
    })
}

var updateItemFromList = function(list,index,newItem){
    /* list[index]= newItem;
    return list */
// Clone Array
var newList = list.slice();
// new value add
newList[index]= newItem
// new array return
return newList;
}

module.exports={
    addItemToList,
    removeItemFromList,
    updateItemFromList
}