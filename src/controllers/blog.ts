import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';

const getBlog = ({ body }: Request, res: Response) => {
	try {
		res.send(body);
	} catch (err) {
		handleHttp(res, 'ERROR_GET_ITEM');
	}
};

const getBlogs = ({ body }: Request, res: Response) => {
	try {
		res.send(body);
	} catch (err) {
		handleHttp(res, 'ERROR_GET_ITEMS');
	}
};

const updateBlog = (req: Request, res: Response) => {
	try {
	} catch (err) {
		handleHttp(res, 'ERROR_UPDATE_ITEM');
	}
};

const createBlog = ({ body }: Request, res: Response) => {
	try {
		res.send(body);
	} catch (err) {
		handleHttp(res, 'ERROR_CREATE_ITEM');
	}
};

const deleteBlog = (req: Request, res: Response) => {
	try {
	} catch (err) {
		handleHttp(res, 'ERROR_DELETE_ITEM');
	}
};

export { getBlog, getBlogs, createBlog, updateBlog, deleteBlog };
