'use strict';

var assert = require('assert'),
    testDatabase = require('./testDatabase'),
    Person = require('./../model/Person'),
    mapper = require('./../model/peopleMapper');

describe('adding people', function () {
    before(function () {
        return testDatabase.init()
            .then(function () {
                return testDatabase.seed('People', [new Person(1, 'John', 'Doe')]);
            });
    });

    it('returns one person', function () {
        return mapper.getAll()
            .then(function (people) {
                assert.equal(people.length, 1);
            });
    });

    after(function () {
        return testDatabase.destroy();
    });
});