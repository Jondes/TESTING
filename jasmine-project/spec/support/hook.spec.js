describe('describe01', function () {

    beforeAll(function ()){
        console.log('running the beforeAll hook');
    });

beforeEach(function ()){
    console.log('running the beforeEach hook');
});

afterEach(function ()){
    console.log('running the afterEach hook');
});

afterAll(function ()){
    console.log('running the afterAll hook');
});

it('test01', function () {
    console.log('running test 01');
});

it('test01', function () {
    console.log('running test 02');
});

it('test01', function () {
    console.log('running test 03');
});
    
    
    
});