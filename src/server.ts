import * as express from 'express';
import * as session from 'express-session';
import { index } from './controllers/index';

const app = express();
const PORT = 3000;

app.get('/', index);
app.listen(PORT, () => console.log(`Express Server Running on port ${PORT}`));

module.exports = app;