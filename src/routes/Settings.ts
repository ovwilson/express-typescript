import { Request, Response, NextFunction } from 'express';
import Model from './../models/Setting';

class SettingsRouter {

    constructor() { }

    getSettings(request: Request, response: Response, next: NextFunction) {

        const model = new Model({ title: 'test', description: 'Test' });
        model.save((err, data) => {
            if (err) {
                response.status(500).send(err);
            }
            response.json(data);
        });
    }
}

export const settingsRouter = new SettingsRouter();