import { Request, Response } from 'express';
import {
	deletePerson,
	getPerson,
	getPersons,
	insertPerson,
	updatePerson,
} from '../services/person';
import { handleHttp } from '../utils/error.handler';

const getItem = async ({ params }: Request, res: Response) => {
	try {
		const { id } = params;
		const response = await getPerson(id);
		const data = response ? response : 'NOT_FOUND_PERSON';
		res.send(data);
	} catch (error) {
		handleHttp(res, 'ERROR_GET_PERSON', error);
	}
};

const getItems = async (req: Request, res: Response) => {
	try {
		const response = await getPersons();
		res.send(response);
	} catch (error) {
		handleHttp(res, 'ERROR_GET_PERSONS', error);
	}
};

const updateItem = async ({ params, body }: Request, res: Response) => {
	try {
		const response = await updatePerson(params.id, body);
		res.send(response);
	} catch (error) {
		handleHttp(res, 'ERROR_UDPATE_PERSON', error);
	}
};

const createItem = async ({ body }: Request, res: Response) => {
	try {
		const responseItem = await insertPerson(body);
		res.send(responseItem);
		console.log('Created a New items');
	} catch (error) {
		handleHttp(res, 'ERROR_CREATE_PERSON', error);
	}
};

const deleteItem = async ({ params }: Request, res: Response) => {
	try {
		const responseItem = await deletePerson(params.id);
		res.send(responseItem);
		console.log('Created a New items');
	} catch (err) {
		handleHttp(res, 'ERROR_DELETE_PERSON');
	}
};

export { getItem, getItems, createItem, updateItem, deleteItem };
