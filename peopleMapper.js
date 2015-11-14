var database = require('./database'),
    Person = require('./Person');

module.exports = {
    getAll: function () {
        return database.select('Id', 'Name', 'LastName')
            .from('People')
            .map(row => new Person(row.Id, row.Name, row.LastName));
    }
};