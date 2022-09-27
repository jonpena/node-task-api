import { Response } from 'express';

const handleHttp = (res: Response, err: string) => {
	res.status(res.statusCode);
	res.send({ err });
};

export { handleHttp };
