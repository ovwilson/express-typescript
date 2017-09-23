var shell = require('shelljs');

const DB_PATH = process.env.DB_PATH;

shell.echo('Starting Mongo Import ...');
shell.exec(`mongoimport --db test --collection settings --file settings.json`);
