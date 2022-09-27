import { Request, Response } from 'express';
import { insertItem } from '../services/item';
import { handleHttp } from '../utils/error.handle';

const getItem = ({ body }: Request, res: Response) => {
	try {
		res.send(body);
	} catch (err) {
		handleHttp(res, 'ERROR_GET_ITEM');
	}
};

const getItems = ({ body }: Request, res: Response) => {
	try {
		res.send(body);
	} catch (err) {
		handleHttp(res, 'ERROR_GET_ITEMS');
	}
};

const updateItem = (req: Request, res: Response) => {
	try {
	} catch (err) {
		handleHttp(res, 'ERROR_UPDATE_ITEM');
	}
};

const createItem = async ({ body }: Request, res: Response) => {
	try {
		const responseItem = await insertItem(body);
		console.log('esperando');
		res.send(responseItem);
	} catch (err) {
		handleHttp(res, 'ERROR_CREATE_ITEM');
	}
};

const deleteItem = (req: Request, res: Response) => {
	try {
	} catch (err) {
		handleHttp(res, 'ERROR_DELETE_ITEM');
	}
};

export { getItem, getItems, createItem, updateItem, deleteItem };
