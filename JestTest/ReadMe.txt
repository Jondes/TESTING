How to write your fist test in javascript using Jest 

npm install -g yarn
yarn init
yarn add jest --dev

- add test script in package.json
"scripts": {
    "test":"jest"
  },
- create[filename].test.js file
   test("Add two numbers",function(){
    var result = util.sum(2,4);
    var expected = 6;

    expect(result).toBe(expected)
})

- yarn test


https://facebook.github.io/jest/docs/en/using-matchers.html
* toBeNull matches only null
* toBeUndefined matches only undefined
* toBeDefined is the opposite of toBeUndefined
* toBeTruthy matches anything that an if statement treats as true
* toBeFalsy matches anything that an if statement treats as false

NB
 › Press f to run only failed tests.
 › Press o to only run tests related to changed files.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
