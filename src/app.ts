import 'dotenv/config';
import express, { json } from 'express';
import cors from 'cors';

import db from './config/mongo';
import { router } from './routes';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

db()
	.then(() => console.log('Connection Ready'))
	.catch(() => console.log('No Connect With Database'));

app.listen(PORT, () => console.log(`Ready por el puerto ${PORT}`));
