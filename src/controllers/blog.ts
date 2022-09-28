import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handler';

const getBlog = ({ body }: Request, res: Response) => {
	try {
		res.send(body);
	} catch (err) {
		handleHttp(res, 'ERROR_GET_BLOGS');
	}
};

const getBlogs = ({ body }: Request, res: Response) => {
	try {
		res.send(body);
	} catch (err) {
		handleHttp(res, 'ERROR_GET_BLOGS');
	}
};

const updateBlog = (req: Request, res: Response) => {
	try {
	} catch (err) {
		handleHttp(res, 'ERROR_UPDATE_BLOGS');
	}
};

const createBlog = ({ body }: Request, res: Response) => {
	try {
		res.send(body);
	} catch (err) {
		handleHttp(res, 'ERROR_CREATE_BLOGS');
	}
};

const deleteBlog = (req: Request, res: Response) => {
	try {
	} catch (err) {
		handleHttp(res, 'ERROR_DELETE_BLOGS');
	}
};

export { getBlog, getBlogs, createBlog, updateBlog, deleteBlog };
