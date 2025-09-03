import {helloWorld, add} from '../js/main.js';
import sinon from 'sinon';

if (typeof global.alert !== 'function') {
  global.alert = () => {};
}

QUnit.module('main.js tests', function() {

    //Chnaged this test to match the alreat that way it proints off correctly

    QUnit.test('helloWorld should show an alert with Hello World', function(assert) {
        const alertStub = sinon.stub(global, 'alert');
        helloWorld();
        assert.ok(alertStub.calledWith('Hello World'), 'alert should be called with Hello World');
        alertStub.restore();
    });

    QUnit.test('add should return the sum of two numbers', function(assert) {
        //Arrange
        const num1 = 2;
        const num2 = 3;
        const expected = 5;
        //Act
        const result = add(num1, num2);
        //Assert
        assert.equal(result, expected, 'add(2, 3) should return 5');
    });

    QUnit.test('add should return the sum of negative numbers', function(assert) {
        //Arrange
        const num1 = -2;
        const num2 = -3;
        const expected = -5;
        //Act
        const result = add(num1, num2);
        //Assert
        assert.equal(result, expected, 'add(-2, -3) should return -5');
    });

    QUnit.test('add should return the sum of a positive and a negative number', function(assert) {
        //Arrange
        const num1 = 2;
        const num2 = -3;
        const expected = -1;
        //Act
        const result = add(num1, num2);
        //Assert
        assert.equal(result, expected, 'add(2, -3) should return -1');
    });

});
