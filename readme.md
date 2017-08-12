# express-typescript

## Dependencies
Dependencies are managed through `package.json`.
In that file you'll find two sections:

## `dependencies`

| Package                         | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| body-parser                     | Express 4 middleware.                                                 |
| connect-mongo                   | MongoDB session store for Express.                                    |
| dotenv                          | Loads environment variables from .env file.                           |
| express                         | Node.js web framework.                                                |
| express-flash                   | Provides flash messages for Express.                                  |
| express-session                 | Express 4 middleware.                                                 |
| mongoose                        | MongoDB ODM.                                                          |
| morgan                          | Express 4 middleware. 
| pug (jade)				      | Template engine for Express.                                          |
| request                         | Simplified HTTP request library.                                      |

## `devDependencies`

| Package                         | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| concurrently                    | Utility that manages multiple concurrent tasks. Used with npm scripts |
| jest                            | Testing library for JavaScript.                                       |
| node-sass                       | Allows to compile .scss files to .css                                 |
| supertest                       | HTTP assertion library.                                               |
| ts-test                         | A preprocessor with sourcemap support to help use TypeScript wit Jest.|
| tslint                          | Linter (similar to ESLint) for TypeScript files                       |
| typescript                      | JavaScript compiler/type checker that boosts JavaScript productivity  |

To install or update these dependencies you can use `yarn` or `yarn upgrade`.

## Version Upgrades
To check for outdated versions, use 'yarn outdated'.

To updated a particular package, use 'yarn upgrade <package-name>'.

To update all minor versions, use 'yarn upgrade'.

To update all major versions, use 'yarn upgrade --latest'.