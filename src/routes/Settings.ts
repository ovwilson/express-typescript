import { Request, Response, NextFunction } from 'express';
import Model from './../models/Setting';

class SettingsRouter {

    constructor() { }

    getSettings(request: Request, response: Response, next: NextFunction) {
        Model.find((err, data) => err ? response.send(err) : response.json(data));
    }

    getSettingById(request: Request, response: Response, next: NextFunction) {
        Model.find({ id: request.params.id }, (err, data) => err ? response.status(500).send(err) : response.json(data));
    }

    createSetting(request: Request, response: Response) {
        Model.create(request.body, (err, data) => err ? response.status(500).send(err) : response.json(data));
    }

    createSettings(request: Request, response: Response) {

    }

    deleteById(request: Request, response: Response) {
        Model.remove({ id: request.params.id }, (err) =>
            err ? response.status(500).send(err) : response.json({ status: 'Records Removed.' }));
    }

    deleteAll(request: Request, response: Response) {
        Model.remove({}, (err) =>
            err ? response.status(500).send(err) : response.json({ status: 'Records Removed.' }));
    }
}

export const settingsRouter = new SettingsRouter();