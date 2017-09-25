import * as dotenv from 'dotenv';
dotenv.config();

import * as express from 'express';
import * as session from 'express-session';
import * as bodyParser from 'body-parser';
import { indexRouter } from './routes/Index';
import { settingsRouter } from './routes/Settings';
import { counterRouter } from './routes/Counter';
import { DB } from './helpers/db';

class Server {
    public app: express.Application;
    public PORT = process.env.PORT;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    public config() {
        new DB().connect();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.listen(this.PORT, () => console.log(`Express Server Running on port ${this.PORT}`));
    }

    public routes() {
        this.app.route('/').get(indexRouter);

        this.app.route('/settings')
            .get(settingsRouter.get)
            .post(settingsRouter.create)
            .delete(settingsRouter.deleteAll);

        this.app.route('/settings/:id')
            .get(settingsRouter.getById)
            .patch(settingsRouter.updateById)
            .delete(settingsRouter.deleteById);

        this.app.route('/settings-create/:quantity')
            .post(settingsRouter.createSeed);

        this.app.route('/counters')
            .get(counterRouter.getCounters);

        this.app.route('/counter-create/:name')
            .post(counterRouter.createCounter);

        this.app.route('/counter/:name')
            .post(counterRouter.updateCounter);
    }
}

export default new Server().app;