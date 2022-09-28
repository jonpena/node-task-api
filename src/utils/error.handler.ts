import { Response } from 'express';

const handleHttp = (res: Response, err: string, errowRaw?: any) => {
	console.log(errowRaw);
	res.status(res.statusCode);
	res.send({ err });
};

export { handleHttp };
