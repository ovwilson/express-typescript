import { Request, Response, NextFunction } from 'express';

class SettingsRouter {

    constructor() { }

    getSettings(request: Request, response: Response, next: NextFunction) {
        response.json({ name: 'settings' });
    }
}

export const settingsRouter = new SettingsRouter();