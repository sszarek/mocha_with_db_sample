'use strict';

var Promise = require('bluebird'),
    readFile = Promise.promisify(require('fs').readFile),
    db = require('./../database');

const CREATE_SQL = './sqls/create.sql';
const DESTROY_SQL = './sqls/destroy.sql';

module.exports = {
    init: function () {
        return readFile(CREATE_SQL, 'utf8')
            .then(function(sql) {
                return db.schema.raw(sql);
            });
    },

    seed: function (table, data) {
        return Promise.each(data, row => {
            return db(table)
                .insert(row);
        });
    },

    destroy: function () {
        return readFile(DESTROY_SQL, 'utf8')
            .then(db.raw);
    }
};