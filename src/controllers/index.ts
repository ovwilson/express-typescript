import { Request, Response } from 'express';

export const index = (request: Request, response: Response) => {
    response.send('<h1>Express Server Loaded</h1>');
};