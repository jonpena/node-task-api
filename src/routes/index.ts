import { Router } from 'express';
import { readdirSync } from 'fs';

const router = Router();

const cleanFileName = (filename: string) => filename.split('.').shift();

const PATH_ROUTER = `${__dirname}`;

readdirSync(PATH_ROUTER).filter((filename) => {
	const cleanFile = cleanFileName(filename);

	if (cleanFile !== 'index') {
		import(`./${cleanFile}`).then((moduleRouter) => {
			router.use(`/${cleanFile}`, moduleRouter.router);
			console.log(`Loading Route ${cleanFile}...`);
		});
	}
});

export { router };
