var util = require('./util.js')

var deepFreeze = require("deep-freeze")

/* test("Add two numbers",function(){
    var result = util.sum(2,4);
    var expected = 7;

    expect(result).toBe(expected)
}) */


test("Add Item to a List", function(){
    var jslibs = ['React', 'Mobx'];
    deepFreeze(jslibs);

    var result = util.addItemToList(jslibs, 'Jest');
    var expected = ['React','Mobx', 'Jest']
    expect(result).toEqual(expected)
})

test("Remove Item from a List", function(){
    var jslibs = ['React', 'Mobx'];
    deepFreeze(jslibs);
    var result = util.removeItemFromList(jslibs,1);
    var expected = ['React']
    expect(result).toEqual(expected)
})

test("Update Item from a List", function(){
    var jslibs = ['React', 'Mobx'];
    deepFreeze(jslibs);
    var result = util.updateItemFromList(jslibs,1,'Redux');
    var expected = ['React','Redux']
    expect(result).toEqual(expected)
})





/* expect(2 + 2).toBe(4);

const data = (one: 1);
data['two']= 2;
expect(data).toEqual({one:1, two: 2});

expect(a + b).not.toBe(0);

expect(n).toBeNull();
expect(n).toBeDefined();
expect(n).toBeUndefined();
expect(n).toBeTruthy();
expect(n).toBeFalsy();

https://facebook.github.io/jest/docs/using-matchers.html */
