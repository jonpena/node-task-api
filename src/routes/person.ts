import { Request, Response, Router } from 'express';
import {
	createItem,
	deleteItem,
	getItem,
	getItems,
	updateItem,
} from '../controllers/person';
import { logMiddleware } from '../middleware/log';

const router = Router();

/**
 * htpp://localhost:3002/items [GET]
 */

router.get('/:id', logMiddleware, getItem);

router.get('/', getItems);

router.post('/', createItem);

router.put('/:id', updateItem);

router.delete('/:id', deleteItem);

export { router };
