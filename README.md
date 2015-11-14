# Moch testing with database sample

Code in this repository is prototype for integration tests using mocha and knex frameworks.

The goal was to:
* create database from *.sql file before test execution,
* insert test record into database,
* create single test which will check number of records returned from DB,
* tear down database using *.sql file