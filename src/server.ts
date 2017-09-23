import * as dotenv from 'dotenv';
dotenv.config();

import * as express from 'express';
import * as session from 'express-session';
import { indexRouter } from './routes/Index';
import { settingsRouter } from './routes/Settings';
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
        this.app.listen(this.PORT, () => console.log(`Express Server Running on port ${this.PORT}`));
    }

    public routes() {
        this.app.route('/').get(indexRouter);
        this.app.route('/settings').get(settingsRouter.getSettings);
    }
}

export default new Server().app;