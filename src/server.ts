import * as dotenv from 'dotenv';
dotenv.config();

import * as express from 'express';
import * as session from 'express-session';
import * as bodyParser from 'body-parser';
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
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.listen(this.PORT, () => console.log(`Express Server Running on port ${this.PORT}`));
    }

    public routes() {
        this.app.route('/').get(indexRouter);

        this.app.route('/settings')
            .get(settingsRouter.getSettings)
            .post(settingsRouter.createSetting)
            .delete(settingsRouter.deleteAll);

        this.app.route('/settings/:id')
            .get(settingsRouter.getSettingById)
            .delete(settingsRouter.deleteById);

        this.app.route('/settings-create/:quantity').get(settingsRouter.createSettings);
    }
}

export default new Server().app;